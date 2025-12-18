# Deployment Guide

This repository supports deployment to both **Cloudflare Pages** (recommended) and **GitHub Pages**.

## 🚀 Quick Start - Cloudflare Pages

### Prerequisites
- Cloudflare account (free tier works)
- Custom domain (optional - you can use Cloudflare Pages subdomain)
- GitHub repository

### Step 1: Get Cloudflare Credentials

1. **API Token**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - **My Profile** → **API Tokens** → **Create Token**
   - Use **Edit Cloudflare Workers** template
   - Copy the token

2. **Account ID**:
   - In Cloudflare Dashboard, select your account
   - Copy Account ID from right sidebar

### Step 2: Configure GitHub Secrets

1. Go to your GitHub repository
2. **Settings** → **Secrets and variables** → **Actions**
3. Add secrets:
   - `CLOUDFLARE_API_TOKEN` = Your API token
   - `CLOUDFLARE_ACCOUNT_ID` = Your Account ID

### Step 3: Deploy

Just push to `main` branch:
```bash
git push origin main
```

The GitHub Actions workflow (`.github/workflows/cloudflare-deploy.yml`) will automatically:
1. Build the Angular application
2. Deploy to Cloudflare Pages
3. Make your site live

### Step 4: Add Custom Domain (Optional)

1. Cloudflare Dashboard → **Pages** → **anandteertha-portfolio**
2. **Custom domains** → **Set up a custom domain**
3. Enter your domain
4. Follow DNS configuration instructions

## 📝 Manual Deployment

### Using Scripts

**Windows (PowerShell):**
```powershell
cd src/client
$env:CLOUDFLARE_API_TOKEN="your-token"
.\deploy-cloudflare.ps1
```

**Linux/Mac (Bash):**
```bash
cd src/client
export CLOUDFLARE_API_TOKEN="your-token"
./deploy-cloudflare.sh
```

### Using npm

```bash
cd src/client
export CLOUDFLARE_API_TOKEN="your-token"
npm run deploy:cloudflare
```

### Using Wrangler CLI Directly

```bash
cd src/client
npm install -g wrangler
npm ci
npm run build:cloudflare
npx wrangler pages deploy dist/client/browser --project-name=anandteertha-portfolio
```

## 🔧 Configuration Files

### GitHub Actions Workflow
- `.github/workflows/cloudflare-deploy.yml` - Automatic deployment on push to main

### Build Configuration
- `src/client/angular.json` - Angular build configuration
- `src/client/package.json` - Build scripts

### Routing
- `src/client/public/_redirects` - SPA routing for Cloudflare Pages (handles Angular routes)

## 🌐 URLs

After deployment:
- **Cloudflare Pages**: `https://anandteertha-portfolio.pages.dev`
- **Custom Domain**: Your configured domain (e.g., `https://anandteertha.dev`)

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Cloudflare Pages dashboard
- Verify Node.js version (currently 20)
- Ensure all dependencies are in `package.json`

### 404 Errors on Routes
- Ensure `_redirects` file exists in `src/client/public/`
- File should contain: `/*    /index.html   200`

### GitHub Actions Fails
- Verify secrets are correctly set
- Check API token permissions
- Ensure Account ID is correct

### Custom Domain Issues
- Verify DNS records are correct
- Check SSL/TLS settings in Cloudflare
- Ensure domain is added in Pages settings

## 📚 Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Pages Action](https://github.com/cloudflare/pages-action)
- [Angular Deployment Guide](https://angular.io/guide/deployment)

## 🔄 Switching Between Deployments

You can keep both deployment methods:

- **Cloudflare Pages**: Uses `.github/workflows/cloudflare-deploy.yml`
- **GitHub Pages**: Uses `.github/workflows/deploy.yml`

Both workflows run on push to `main`, so you'll have deployments to both platforms. You can disable one by removing or renaming the workflow file.

