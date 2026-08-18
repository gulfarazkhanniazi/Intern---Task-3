#!/usr/bin/env bash
# Pull the latest code and restart. Run on the VPS after pushing to main.
set -euo pipefail
cd /var/www/techrynex
git pull origin main
npm ci
npm run build
pm2 restart techrynex
pm2 status techrynex
