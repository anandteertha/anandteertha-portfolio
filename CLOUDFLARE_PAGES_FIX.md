# Fix Cloudflare Pages Deploy Command Error

The error occurs because Cloudflare Pages is configured with **Direct Git Integration**, which tries to run build and deploy commands automatically. Since you're using **GitHub Actions** for deployment, you should disconnect Git integration.

## The Problem

Cloudflare Pages is trying to run `npx wrangler deploy` which is for **Workers**, not **Pages**. This happens because:
- Cloudflare Pages has Direct Git Integration enabled
- It's trying to build and deploy automatically on every push
- The deploy command is using the wrong syntax

## Solution: Disconnect Git Integration (Recommended)

Since you're using GitHub Actions for deployment, **disconnect Git integration** in Cloudflare Pages:

### Steps to Disconnect Git:

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** → **anandteertha-portfolio**
3. Go to **Settings** → **Builds & deployments**
4. Scroll down to **Source** section
5. Click **Disconnect** or **Remove connection** next to your Git repository
6. Confirm the disconnection

### After Disconnecting:

- Cloudflare Pages will **stop** automatically building/deploying on Git pushes
- Only **GitHub Actions** will handle deployments (via `.github/workflows/cloudflare-deploy.yml`)
- You'll have full control over the build and deploy process
- You can still use your custom domain

### Verify GitHub Actions is Working:

After disconnecting Git, your GitHub Actions workflow will be the **only** deployment method:
- Push to `main` branch → GitHub Actions runs → Deploys to Cloudflare Pages
- Check the **Actions** tab in your GitHub repository to see deployment status

## Alternative: Fix the Deploy Command (If you want to keep Git integration)

If you prefer to keep Git integration, update the deploy command:

1. Go to **Pages** → **anandteertha-portfolio** → **Settings** → **Builds & deployments**
2. Update **Deploy command** to:
   ```
   npx wrangler pages deploy src/client/dist/client/browser --project-name=anandteertha-portfolio
   ```
3. Save changes

**However, this is NOT recommended** because:
- You'll have duplicate deployments (Git integration + GitHub Actions)
- Harder to manage environment variables
- Less control over the build process

## Why Disconnect Git?

**Benefits of using only GitHub Actions:**
- ✅ Full control over build and deploy process
- ✅ Use GitHub secrets for environment variables (like `GROQ_API_KEY`)
- ✅ Better CI/CD workflow
- ✅ Can run custom scripts (like `load-env.js`)
- ✅ No conflicts between Cloudflare's auto-deploy and GitHub Actions

## Recommended Approach

**Disconnect Git integration** and use **only GitHub Actions**:
1. Disconnect Git in Cloudflare Pages dashboard
2. Keep using `.github/workflows/cloudflare-deploy.yml` for all deployments
3. Your custom domain will still work
4. Deployments will be more reliable and controlled

After disconnecting Git, your next push will deploy correctly via GitHub Actions only.

