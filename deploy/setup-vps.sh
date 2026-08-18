#!/usr/bin/env bash
# One-time VPS setup for the TechRynex site.
# Run as root on a fresh Ubuntu 22.04 / 24.04 GoDaddy VPS:
#   bash setup-vps.sh
set -euo pipefail

REPO="https://github.com/gulfarazkhanniazi/Intern---Task-3.git"
APP_DIR="/var/www/techrynex"
DOMAIN="techrynex.com"

echo "==> System packages"
apt-get update
apt-get install -y curl git nginx ufw

echo "==> Node.js 22 (Next 16 needs >= 20.9)"
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt-get install -y nodejs
node -v

echo "==> Swap (protects 'next build' from the OOM killer on small VPS plans)"
if [ ! -f /swapfile ]; then
  fallocate -l 2G /swapfile
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  echo '/swapfile none swap sw 0 0' >> /etc/fstab
fi

echo "==> Clone"
mkdir -p "$(dirname "$APP_DIR")"
if [ ! -d "$APP_DIR/.git" ]; then
  git clone "$REPO" "$APP_DIR"
fi
cd "$APP_DIR"

echo "==> Environment"
if [ ! -f .env ]; then
  cp .env.example .env
  echo
  echo "  !! .env created from the example — edit it with real values now:"
  echo "     nano $APP_DIR/.env"
  echo "     Then re-run this script."
  exit 1
fi

echo "==> Build"
npm ci
npm run build

echo "==> PM2 process manager"
npm install -g pm2
pm2 delete techrynex 2>/dev/null || true
pm2 start npm --name techrynex -- start
pm2 startup systemd -u root --hp /root
pm2 save

echo "==> Nginx reverse proxy"
cp deploy/nginx-techrynex.conf /etc/nginx/sites-available/techrynex
ln -sf /etc/nginx/sites-available/techrynex /etc/nginx/sites-enabled/techrynex
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

echo "==> Firewall"
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

echo
echo "Done. The site is live over HTTP on this server's IP."
echo "Next:"
echo "  1. Point $DOMAIN's DNS A record at this server's IP in GoDaddy."
echo "  2. Once DNS resolves, enable HTTPS:"
echo "       apt-get install -y certbot python3-certbot-nginx"
echo "       certbot --nginx -d $DOMAIN -d www.$DOMAIN"
