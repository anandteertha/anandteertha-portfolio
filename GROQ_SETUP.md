# Groq API Setup Guide

The chat assistant now uses Groq API instead of OpenAI. Follow these steps to configure it.

## Quick Setup

### Option 1: Using .env file (Recommended)

1. **Create a `.env` file** in `src/client/` directory:
   ```
   GROQ_API_KEY=your_groq_api_key_here
   ```

2. **Run the environment loader script** before starting the dev server:
   ```bash
   cd src/client
   node load-env.js
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

### Option 2: Manual Configuration

1. **Edit** `src/client/src/environments/environment.ts`:
   ```typescript
   export const environment = {
     production: false,
     groqApiKey: 'your_groq_api_key_here'
   };
   ```

2. **Edit** `src/client/src/environments/environment.prod.ts` for production:
   ```typescript
   export const environment = {
     production: true,
     groqApiKey: 'your_groq_api_key_here'
   };
   ```

## Getting Your Groq API Key

1. Go to [Groq Console](https://console.groq.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

## Available Groq Models

The service is configured to use `llama-3.3-70b-versatile` by default (replacement for deprecated `llama-3.1-70b-versatile`). You can change this in `chat.service.ts`:

- `llama-3.3-70b-versatile` (default) - Fast and capable, multilingual support
- `llama-3.1-8b-instant` - Very fast, smaller model, great for quick responses
- `mixtral-8x7b-32768` - Good balance of speed and capability
- `llama-4-maverick-17b-128e` - Multimodal model (text + images)
- `llama-4-scout-17b-16e` - Multimodal model with mixture-of-experts

**Note**: `llama-3.1-70b-versatile` has been decommissioned. Use `llama-3.3-70b-versatile` instead.

## Automating Environment Loading

To automatically load environment variables before starting the dev server, you can update your `package.json` scripts:

```json
{
  "scripts": {
    "prestart": "node load-env.js",
    "prebuild": "node load-env.js",
    "start": "ng serve",
    "build": "ng build"
  }
}
```

This will automatically run `load-env.js` before starting or building.

## Security Notes

⚠️ **Important Security Reminders:**

1. **Never commit your `.env` file** to version control
2. Add `.env` to your `.gitignore` file:
   ```
   src/client/.env
   ```
3. For production deployments, use environment variables provided by your hosting platform (Cloudflare Pages, Vercel, etc.)

## Troubleshooting

### "Groq API key not configured" Error

- Make sure you've created the `.env` file in `src/client/` directory
- Run `node load-env.js` to update environment files
- Or manually set the API key in `environment.ts` files
- Restart your dev server after making changes

### API Errors

- Verify your API key is correct
- Check your Groq account has available credits
- Ensure you're using a valid model name
- Check browser console for detailed error messages

## Cost Considerations

Groq offers:
- **Free tier** with generous limits
- Very fast inference speeds
- Pay-as-you-go pricing for higher usage

Monitor your usage at [Groq Console](https://console.groq.com/)

