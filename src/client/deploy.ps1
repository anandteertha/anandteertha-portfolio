# deploy.ps1

# Step 1: Build the Angular app with the specified base href
Write-Host "Building Angular app with base href..."
ng build --base-href "https://anandteertha.github.io/anandteertha-portfolio/"

# Step 2: Deploy to GitHub Pages
Write-Host "Deploying to GitHub Pages..."
npx angular-cli-ghpages --dir=dist/client/browser

Write-Host "Deployment complete."