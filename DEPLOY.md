# Deploying to a GoDaddy VPS

The site is a Next.js 16 app. Five of its six pages are static, but
`/api/contact` is server-rendered on demand — it calls Resend with a
secret key. That one route is why this needs a Node runtime and cannot
be uploaded as plain files to shared hosting.

## 1. Buy the right plan

GoDaddy → **VPS Hosting** → Linux → **self-managed**.

- OS: **Ubuntu 22.04 or 24.04**
- RAM: **2 GB minimum.** On 1 GB, `next build` is liable to be killed
  by the OOM killer partway through. `setup-vps.sh` adds a 2 GB swap
  file as a safety net, but real RAM is better.

Do **not** buy "Web Hosting" / "Linux Hosting with cPanel" for this
app. Its Node.js version selector is typically older than the 20.9
that Next 16 requires.

After purchase, GoDaddy emails you the server's **IP address** and
**root password**.

## 2. Run the setup script

From your laptop:

    ssh root@YOUR_SERVER_IP

Then on the server:

    apt-get update && apt-get install -y git
    git clone https://github.com/gulfarazkhanniazi/Intern---Task-3.git /var/www/techrynex
    cd /var/www/techrynex
    bash deploy/setup-vps.sh

The first run stops and asks you to fill in `.env` — it copies
`.env.example` into place for you. Edit it:

    nano /var/www/techrynex/.env

Fill in the real `RESEND_API_KEY`, and set
`CONTACT_TO_EMAIL=Procurement@techrynex.com`. Then run the script
again:

    bash deploy/setup-vps.sh

It installs Node 22, builds the app, starts it under PM2 (so it
survives reboots and crashes), puts Nginx in front on port 80, and
enables the firewall.

Verify by visiting `http://YOUR_SERVER_IP` in a browser.

## 3. Point the domain at the server

In GoDaddy → **My Products → Domain → DNS → Manage Zones**:

| Type | Name | Value            | TTL      |
| ---- | ---- | ---------------- | -------- |
| A    | @    | YOUR_SERVER_IP   | 600      |
| A    | www  | YOUR_SERVER_IP   | 600      |

Delete any existing A or CNAME records for `@` and `www` that point at
GoDaddy's parking or Website Builder pages, or they will conflict.

Propagation usually takes minutes. Check with:

    dig +short techrynex.com

## 4. Turn on HTTPS

Only after DNS resolves to your server:

    apt-get install -y certbot python3-certbot-nginx
    certbot --nginx -d techrynex.com -d www.techrynex.com

Certbot edits the Nginx config to add the HTTPS block and sets up
automatic renewal.

## 5. Shipping updates later

Push to `main` from your laptop, then on the server:

    bash /var/www/techrynex/deploy/update.sh

That pulls, reinstalls, rebuilds, and restarts PM2.

## Troubleshooting

**Site down / 502 Bad Gateway** — the Node process isn't running:

    pm2 status
    pm2 logs techrynex --lines 50

**Build killed partway through** — out of memory. Confirm swap is on
with `free -h`. If it still fails, size up the VPS.

**Contact form returns "Email is not configured on the server yet"** —
`RESEND_API_KEY` is missing from `/var/www/techrynex/.env`. Env vars
are read at build and start, so after editing `.env`:

    pm2 restart techrynex

**Form sends to the wrong inbox** — `CONTACT_TO_EMAIL` in `.env`
overrides `COMPANY_EMAIL` in `lib/data.ts`.
