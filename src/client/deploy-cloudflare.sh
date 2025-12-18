#!/bin/bash

# Cloudflare Pages Deployment Script
# This script builds and deploys the Angular app to Cloudflare Pages

set -e

echo "🚀 Starting Cloudflare Pages Deployment..."

# Check if wrangler is installed
echo "📦 Checking for Wrangler CLI..."
if ! command -v wrangler &> /dev/null; then
    echo "⚠️  Wrangler CLI not found. Installing..."
    npm install -g wrangler
fi

# Check for required environment variables
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    echo "❌ Error: CLOUDFLARE_API_TOKEN environment variable is not set"
    echo "   Please set it using: export CLOUDFLARE_API_TOKEN='your-token'"
    exit 1
fi

# Install dependencies
echo "📥 Installing dependencies..."
npm ci

# Build the application
echo "🔨 Building Angular application..."
npm run build:cloudflare

# Deploy to Cloudflare Pages
echo "☁️  Deploying to Cloudflare Pages..."
npx wrangler pages deploy dist/client/browser --project-name=anandteertha-portfolio

echo "✅ Deployment successful!"
echo "🌐 Your site should be live at: https://anandteertha-portfolio.pages.dev"

