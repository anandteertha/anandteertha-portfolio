# Cloudflare Pages Environment Variables Setup

Since Angular apps are static and environment variables are compiled into the bundle at build time, we need to set the Groq API key as a GitHub secret that gets injected during the build process.

## Setup Instructions

### Step 1: Add Groq API Key as GitHub Secret

1. **Go to your GitHub repository**
   - Navigate to: `https://github.com/YOUR_USERNAME/anandteertha-portfolio`

2. **Open Settings**
   - Click on the **Settings** tab in your repository

3. **Navigate to Secrets**
   - In the left sidebar, click on **Secrets and variables**
   - Then click on **Actions**

4. **Add New Secret**
   - Click **New repository secret**
   - **Name**: `GROQ_API_KEY`
   - **Secret**: Paste your Groq API key (starts with `gsk_...`)
   - Click **Add secret**

### Step 2: Verify the Workflow

The GitHub Actions workflow is already configured to:
1. Load the `GROQ_API_KEY` from GitHub secrets
2. Run `load-env.js` to inject it into environment files
3. Build the Angular app with the API key included

### Step 3: Test the Deployment

1. **Push to main branch** or manually trigger the workflow
2. The workflow will automatically:
   - Load the API key from secrets
   - Build the app with the key embedded
   - Deploy to Cloudflare Pages

## How It Works

1. **During Build**: The GitHub Actions workflow sets `GROQ_API_KEY` as an environment variable
2. **load-env.js**: Reads the environment variable and writes it to `environment.prod.ts`
3. **Angular Build**: Compiles the environment file into the production bundle
4. **Deployment**: The built app (with API key embedded) is deployed to Cloudflare Pages

## Important Notes

⚠️ **Security Considerations:**

- The API key will be **embedded in the JavaScript bundle** (this is normal for static Angular apps)
- Anyone can view it in the browser's developer tools
- Consider implementing rate limiting on your Groq account
- Monitor your API usage in the Groq console

✅ **Best Practices:**

- Use Groq's rate limiting features
- Monitor usage regularly
- Set up billing alerts if needed
- Consider using a backend proxy for production (more secure but requires a server)

## Alternative: Backend Proxy (More Secure)

For better security, you could:
1. Create a backend API (Node.js/Express, Python/FastAPI, etc.)
2. Store the API key on the backend only
3. Have your Angular app call your backend API
4. Backend makes the Groq API calls

This keeps the API key completely hidden from the frontend, but requires hosting a backend server.

## Troubleshooting

### "Groq API key not configured" Error

- Verify `GROQ_API_KEY` secret is set in GitHub
- Check the workflow logs to see if the secret was loaded
- Ensure the secret name matches exactly: `GROQ_API_KEY`

### Build Fails

- Check GitHub Actions logs
- Verify the `load-env.js` script ran successfully
- Ensure `environment.prod.ts` was updated with the API key

### API Key Not Working in Production

- Verify the API key is correct in GitHub secrets
- Check that the workflow successfully loaded the key
- Review the build logs to confirm the environment file was updated

