# Cloudflare Pages Deployment Script
# This script builds and deploys the Angular app to Cloudflare Pages

Write-Host "🚀 Starting Cloudflare Pages Deployment..." -ForegroundColor Cyan

# Check if wrangler is installed
Write-Host "📦 Checking for Wrangler CLI..." -ForegroundColor Yellow
$wranglerInstalled = npm list -g wrangler 2>$null
if (-not $wranglerInstalled) {
    Write-Host "⚠️  Wrangler CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g wrangler
}

# Check for required environment variables
if (-not $env:CLOUDFLARE_API_TOKEN) {
    Write-Host "❌ Error: CLOUDFLARE_API_TOKEN environment variable is not set" -ForegroundColor Red
    Write-Host "   Please set it using: `$env:CLOUDFLARE_API_TOKEN='your-token'" -ForegroundColor Yellow
    exit 1
}

# Install dependencies
Write-Host "📥 Installing dependencies..." -ForegroundColor Yellow
npm ci
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

# Build the application
Write-Host "🔨 Building Angular application..." -ForegroundColor Yellow
npm run build:cloudflare
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}

# Deploy to Cloudflare Pages
Write-Host "☁️  Deploying to Cloudflare Pages..." -ForegroundColor Yellow
npx wrangler pages deploy dist/client/browser --project-name=anandteertha-portfolio
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Deployment failed" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Deployment successful!" -ForegroundColor Green
Write-Host "🌐 Your site should be live at: https://anandteertha-portfolio.pages.dev" -ForegroundColor Cyan

