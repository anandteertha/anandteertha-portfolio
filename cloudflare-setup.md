# Cloudflare Pages Deployment Guide

This guide will help you deploy your portfolio to Cloudflare Pages with a custom domain.

## Prerequisites

1. A Cloudflare account (free tier works)
2. A custom domain (or you can use a Cloudflare Pages subdomain)
3. GitHub repository with your code

## Step 1: Get Cloudflare API Credentials

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **My Profile** → **API Tokens**
3. Click **Create Token**
4. Use the **Edit Cloudflare Workers** template or create a custom token with:
   - **Account** → **Cloudflare Pages** → **Edit** permissions
   - **Zone** → **Zone Settings** → **Read** (if using custom domain)
5. Copy the API token (you'll need it for GitHub secrets)

## Step 2: Get Your Cloudflare Account ID

1. In Cloudflare Dashboard, select your account
2. The Account ID is visible in the right sidebar
3. Copy it (you'll need it for GitHub secrets)

## Step 3: Set Up GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add:

   - **Name**: `CLOUDFLARE_API_TOKEN`
     **Value**: Your Cloudflare API token from Step 1

   - **Name**: `CLOUDFLARE_ACCOUNT_ID`
     **Value**: Your Cloudflare Account ID from Step 2

## Step 4: Create Cloudflare Pages Project

### Option A: Using Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** → **Create a project**
3. Select **Connect to Git**
4. Choose your GitHub repository
5. Configure:
   - **Project name**: `anandteertha-portfolio`
   - **Production branch**: `main`
   - **Build command**: `cd src/client && npm ci && npm run build -- --configuration production`
   - **Build output directory**: `src/client/dist/client/browser`
   - **Root directory**: `/` (leave empty)
6. Click **Save and Deploy**

### Option B: Using GitHub Actions (Automatic)

The GitHub Actions workflow will automatically create and deploy to Cloudflare Pages when you push to main.

## Step 5: Configure Custom Domain

1. In Cloudflare Dashboard, go to **Pages** → **anandteertha-portfolio**
2. Click **Custom domains** → **Set up a custom domain**
3. Enter your domain (e.g., `anandteertha.dev` or `www.anandteertha.dev`)
4. Follow the DNS configuration instructions:
   - Add a CNAME record pointing to your Cloudflare Pages URL
   - Or use Cloudflare's automatic DNS configuration

### DNS Configuration

If you're using Cloudflare for DNS:
- The DNS records will be automatically configured
- If not, add a CNAME record:
  - **Name**: `@` (or `www` for www subdomain)
  - **Target**: `anandteertha-portfolio.pages.dev` (or your Pages URL)
  - **Proxy status**: Proxied (orange cloud)

## Step 6: Update Base Href (Optional)

If you're using a custom domain, you may want to update the base href in your Angular build:

1. Update `.github/workflows/cloudflare-deploy.yml`:
   ```yaml
   - name: Build Angular app
     working-directory: ./src/client
     run: npm run build -- --configuration production --base-href="/"
   ```

2. Or update `src/client/src/index.html`:
   ```html
   <base href="/">
   ```

## Step 7: Test Deployment

1. Push to the `main` branch:
   ```bash
   git add .
   git commit -m "Setup Cloudflare Pages deployment"
   git push origin main
   ```

2. Check GitHub Actions:
   - Go to **Actions** tab in your repository
   - Watch the deployment workflow run

3. Check Cloudflare Pages:
   - Go to **Pages** → **anandteertha-portfolio**
   - View deployment status and logs

## Troubleshooting

### Build Fails

- Check the build logs in Cloudflare Pages dashboard
- Ensure Node.js version matches (currently set to 20)
- Verify all dependencies are in `package.json`

### 404 Errors on Routes

- Ensure `_redirects` file is in the `public` folder
- The file should contain: `/*    /index.html   200`

### Custom Domain Not Working

- Verify DNS records are correct
- Check SSL/TLS settings in Cloudflare
- Ensure the domain is properly added in Pages settings

### GitHub Actions Fails

- Verify secrets are correctly set
- Check API token permissions
- Ensure Account ID is correct

## Manual Deployment Script

If you want to deploy manually, use the script:

```bash
cd src/client
npm install
npm run build -- --configuration production
npx wrangler pages deploy dist/client/browser --project-name=anandteertha-portfolio
```

## Environment Variables (Optional)

If you need environment variables:

1. In Cloudflare Pages dashboard → **Settings** → **Environment variables**
2. Add variables for production/preview
3. Access in Angular using `process.env['VARIABLE_NAME']` (requires build-time configuration)

## Performance Optimization

Cloudflare Pages automatically provides:
- Global CDN
- Automatic HTTPS
- DDoS protection
- Image optimization (with Cloudflare Images)
- Analytics (with Cloudflare Web Analytics)

## Support

For issues:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

