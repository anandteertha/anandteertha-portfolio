# 🚀 Quick Start - Cloudflare Pages Deployment

## ⚡ 5-Minute Setup

### 1. Get Cloudflare API Token
- Go to https://dash.cloudflare.com/profile/api-tokens
- Click **Create Token**
- Use **Edit Cloudflare Workers** template
- **Copy the token** (you won't see it again!)

### 2. Get Account ID
- In Cloudflare Dashboard, select your account
- **Copy Account ID** from right sidebar

### 3. Add GitHub Secrets
- Go to: `https://github.com/YOUR_USERNAME/anandteertha-portfolio/settings/secrets/actions`
- Click **New repository secret**
- Add:
  - Name: `CLOUDFLARE_API_TOKEN` → Value: (your token)
  - Name: `CLOUDFLARE_ACCOUNT_ID` → Value: (your account ID)

### 4. Push to Main
```bash
git add .
git commit -m "Setup Cloudflare Pages"
git push origin main
```

### 5. Check Deployment
- GitHub: Go to **Actions** tab → Watch deployment
- Cloudflare: Go to **Pages** → See your site deploy
- Your site: `https://anandteertha-portfolio.pages.dev`

## ✅ Done!

Every push to `main` will now automatically deploy to Cloudflare Pages.

## 🌐 Add Custom Domain

1. Cloudflare Dashboard → **Pages** → **anandteertha-portfolio**
2. **Custom domains** → **Set up a custom domain**
3. Enter your domain (e.g., `anandteertha.dev`)
4. Follow DNS instructions

That's it! 🎉

