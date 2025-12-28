# Fix Cloudflare API Token Permissions Error

## The Error

```
✘ [ERROR] A request to the Cloudflare API failed.
Authentication error [code: 10000]
```

This means your API token doesn't have the correct permissions for Cloudflare Pages.

## Solution: Create New API Token with Correct Permissions

### Step 1: Create Custom API Token

1. Go to [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click **Create Token**
3. Click **Create Custom Token**

### Step 2: Set Permissions

**Required Permissions:**

1. **Account** → **Cloudflare Pages** → **Edit**
   - This is **CRITICAL** - without this, you can't deploy to Pages

2. **Account** → **Account Settings** → **Read** (recommended)
   - Helps with account verification

3. **Zone** → **Zone Settings** → **Read** (if using custom domain)
   - Needed if you have a custom domain connected

### Step 3: Account Resources

- Select **Include** → **All accounts** (or select your specific account)
- Make sure your account `88d617f97bcb243c20a9645a3d426a51` is included

### Step 4: Create and Copy Token

1. Click **Continue to summary**
2. Review the permissions
3. Click **Create Token**
4. **IMMEDIATELY COPY THE TOKEN** - you won't see it again!

### Step 5: Update GitHub Secret

1. Go to your GitHub repository
2. **Settings** → **Secrets and variables** → **Actions**
3. Find `CLOUDFLARE_API_TOKEN`
4. Click **Update** (or create new if it doesn't exist)
5. Paste the new token
6. Click **Update secret**

### Step 6: Verify

After updating the token, push to `main` branch and check the GitHub Actions workflow. It should now have permission to deploy to Cloudflare Pages.

## Why This Happens

The "Edit Cloudflare Workers" template token doesn't include **Cloudflare Pages** permissions. You need a custom token with explicit Pages permissions.

## Quick Checklist

- ✅ **Account** → **Cloudflare Pages** → **Edit** (REQUIRED)
- ✅ **Account** → **Account Settings** → **Read** (recommended)
- ✅ **Zone** → **Zone Settings** → **Read** (if using custom domain)
- ✅ Account resources include your account
- ✅ Token is updated in GitHub secrets

After creating the new token with these permissions, your deployments should work!

