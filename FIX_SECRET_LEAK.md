# Fixing Secret Leak in Git History

GitHub detected your Groq API key in the committed files. Here's how to fix it:

## Immediate Steps

### Option 1: Allow the Secret (Quick Fix - Not Recommended)

If you need to push immediately, you can allow the secret via GitHub:
1. Visit: https://github.com/anandteertha/anandteertha-portfolio/security/secret-scanning/unblock-secret/37TwfwkDAIqzqzHfgIhAQ1Eh6KC
2. Click "Allow secret" (not recommended for production)

### Option 2: Remove Secret from History (Recommended)

**⚠️ Important**: If this is a public repository, your API key is already exposed. You should:
1. **Rotate your API key immediately** in Groq Console
2. Remove the secret from git history

#### Steps to Remove Secret from History:

1. **Rotate your API key first** (CRITICAL):
   - Go to [Groq Console](https://console.groq.com/)
   - Generate a new API key
   - Update your `.env` file with the new key
   - Update GitHub secret `GROQ_API_KEY` with the new key

2. **Remove the secret from git history**:
   ```bash
   # Install git-filter-repo if needed
   # pip install git-filter-repo
   
   # Remove the API key from all commits
   git filter-repo --path src/client/src/environments/environment.ts --path src/client/src/environments/environment.prod.ts --invert-paths
   
   # OR use BFG Repo-Cleaner (simpler)
   # Download from: https://rtyley.github.io/bfg-repo-cleaner/
   # java -jar bfg.jar --replace-text passwords.txt
   ```

3. **Force push** (⚠️ WARNING: This rewrites history):
   ```bash
   git push origin --force --all
   ```

## What We've Fixed

✅ **Removed API key from environment files** - They now have empty strings
✅ **Added environment files to .gitignore** - They won't be committed anymore
✅ **Created template files** - `environment.example.ts` files are safe to commit
✅ **Updated load-env.js** - Automatically generates environment files from .env

## Going Forward

1. **Environment files are now ignored** - They won't be committed
2. **Use .env file locally** - The `load-env.js` script will load it automatically
3. **Use GitHub secrets for CI/CD** - The workflow uses secrets, not committed files
4. **Template files are safe** - `environment.example.ts` files can be committed

## Verification

After fixing, verify:
```bash
# Check that environment files are ignored
git status
# Should NOT show environment.ts or environment.prod.ts

# Verify .gitignore
cat .gitignore | grep environment
# Should show the environment files listed
```

## Security Best Practices

1. ✅ **Never commit API keys** - Always use .env files or secrets
2. ✅ **Rotate exposed keys immediately** - If a key was committed, rotate it
3. ✅ **Use GitHub secrets for CI/CD** - Never hardcode in workflows
4. ✅ **Enable Secret Scanning** - GitHub can detect secrets automatically
5. ✅ **Review commits before pushing** - Check for sensitive data

## Next Steps

1. Rotate your Groq API key (if it was exposed)
2. Update `.env` file with new key
3. Update GitHub secret `GROQ_API_KEY` with new key
4. Run `node load-env.js` to regenerate environment files
5. Commit the changes (without API keys)
6. Push to GitHub

