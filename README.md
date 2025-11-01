# MasseurMatch — Coming Soon

MasseurMatch is building the most intelligent LGBTQ+ massage directory. This repository contains the public landing page and conversational waitlist concierge powered by Google Gemini.

## Getting Started

1. Copy the example environment variables:

   ```bash
   cp .env.local.example .env.local # if you create an example file
   ```

   Or create `.env.local` with the following keys:

   ```bash
   GOOGLE_API_KEY=your_gemini_key
   NODE_ENV=development
   ```

2. Install dependencies and start the development server:

   ```bash
   npm install
   npm run dev
   ```

3. Visit [`http://localhost:3000`](http://localhost:3000) to explore the landing page and chat with Knotty.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve the production build. |

## Linting & Type Safety

This project uses ESLint and TypeScript. Before opening a pull request, run:

```bash
npx eslint .
npx tsc --noEmit
```

## Environment Variables

- `GOOGLE_API_KEY` — Required for the `/api/chat` route to fetch live responses from Gemini. Use a mock or leave undefined during development to receive a placeholder response.
- `NODE_ENV` — Used by Next.js to differentiate between development and production.

Never commit `.env.local` or any secret values. The file is ignored via `.gitignore`.

## Project Structure

```
app/
  api/chat/route.ts   # Server route for Gemini responses
  components/         # UI components for the hero chat experience
  page.tsx            # Landing page content
  terms/page.tsx      # Pre-launch legal placeholder
public/
  favicon.ico
  globe.svg
```

Tailwind CSS powers styling via `tailwind.config.js` and `postcss.config.mjs`.

## Deployment

This project targets deployment on Vercel. Ensure the following secrets are configured in your deployment environment:

- `GOOGLE_API_KEY`

## Contributing

1. Fork the repository and create a new branch for your feature or fix.
2. Make your changes and run the quality checks listed above.
3. Submit a pull request detailing your updates and testing.

---

© MasseurMatch. All rights reserved.
