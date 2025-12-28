# Chat LLM Integration Setup

This portfolio includes an AI chat assistant that can answer questions about Anandteertha Rao's career and education.

## Features

- **Floating Chat Button**: A professional chat button appears in the bottom-right corner
- **AI-Powered Responses**: Uses OpenAI's GPT-4o-mini model to answer questions
- **Career & Education Context**: Pre-loaded with comprehensive information about:
  - Education history (NC State University, University of Mumbai)
  - Work experience (Khayrallah Center, Raychem, Outrider.live)
  - Projects (NebulaKV, Neatd, NutriBite, Gym Trainer, etc.)
  - Skills and technologies

## Setup Instructions

### 1. Get OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key (you'll only see it once!)

### 2. Configure the API Key

Open `src/client/src/app/services/chat.service.ts` and update the `apiKey` property:

```typescript
private readonly apiKey = 'your-api-key-here';
```

**Important**: For production, use environment variables instead of hardcoding the key.

### 3. Alternative: Use Environment Variables (Recommended)

1. Create a `.env` file in `src/client/`:
```
OPENAI_API_KEY=your-api-key-here
```

2. Update `chat.service.ts` to read from environment:
```typescript
private readonly apiKey = process.env['OPENAI_API_KEY'] || '';
```

3. Update `angular.json` to include environment variables in the build.

### 4. Test the Chat

1. Start the development server: `npm start`
2. Click the chat button in the bottom-right corner
3. Ask questions like:
   - "What is Anandteertha's education background?"
   - "Tell me about his work experience at Raychem"
   - "What projects has he worked on?"
   - "What programming languages does he know?"

## Cost Considerations

- OpenAI charges per token used
- GPT-4o-mini is cost-effective (~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens)
- The chat is configured with `max_tokens: 500` to limit response length
- Monitor your usage at [OpenAI Usage Dashboard](https://platform.openai.com/usage)

## Customization

### Update Context Information

Edit the `systemContext` in `chat.service.ts` to update the information the AI knows about you.

### Change Model

You can switch to a different model by changing the `model` property in the API call:
- `gpt-4o-mini` (current, cost-effective)
- `gpt-4o` (more capable, higher cost)
- `gpt-3.5-turbo` (older, cheaper)

### Adjust Response Length

Modify `max_tokens` in the API payload to allow longer or shorter responses.

## Security Notes

⚠️ **Never commit your API key to version control!**

- Add `src/client/src/app/services/chat.service.ts` to `.gitignore` if you hardcode the key
- Use environment variables for production
- Consider using a backend proxy to hide your API key from the frontend

## Troubleshooting

### "OpenAI API key not configured" Error

- Make sure you've added your API key to `chat.service.ts`
- Check that the key is correct and hasn't expired

### "Failed to get response from AI" Error

- Check your OpenAI account has credits/billing set up
- Verify your API key has the correct permissions
- Check browser console for detailed error messages

### CORS Issues

- OpenAI API should work from the browser
- If you encounter CORS issues, consider using a backend proxy

## Alternative LLM Providers

If you prefer a different LLM provider:

1. **Anthropic Claude**: Update the API endpoint and headers
2. **Google Gemini**: Use Google's API
3. **Self-hosted**: Use Ollama or similar for local deployment
4. **Backend Proxy**: Create a backend service to proxy requests

## Support

For issues or questions, check:
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [OpenAI Community Forum](https://community.openai.com/)

