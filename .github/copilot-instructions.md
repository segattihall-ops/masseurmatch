# GitHub Copilot Instructions for MasseurMatch

## Project Overview

MasseurMatch is an intelligent LGBTQ+ massage directory that connects clients with inclusive, safe, and professional massage therapists worldwide. This is a Next.js application focused on creating a welcoming and inclusive experience for the LGBTQ+ community.

## Technology Stack

- **Framework**: Next.js 15.5.6 (App Router)
- **Language**: TypeScript with strict mode enabled
- **UI Library**: React 18.3.1
- **Styling**: Tailwind CSS 3.4.13
- **Animation**: Framer Motion 11.2.6
- **Icons**: react-icons 5.3.0

## Code Style & Standards

### TypeScript/JavaScript

- Use TypeScript for all new files (.tsx for React components, .ts for utilities)
- Enable strict type checking - follow `tsconfig.json` settings
- Use `"use client"` directive for components that use client-side React features (hooks, event handlers)
- Prefer functional components with hooks over class components
- Use proper TypeScript types instead of `any` whenever possible
- Use `const` for variables that won't be reassigned, `let` otherwise

### React Best Practices

- Use React hooks (`useState`, `useEffect`, `useRef`, etc.) for state management
- Keep components focused and single-purpose
- Extract reusable UI elements into separate component files in `app/components/`
- Use proper prop typing with TypeScript interfaces or types
- Clean up side effects in `useEffect` return functions

### Styling with Tailwind CSS

The project uses custom color palette defined in `tailwind.config.js`:
- `jet`: hsl(0, 0%, 4%) - Darkest black
- `charcoal`: hsl(0, 0%, 10%) - Dark gray
- `umbra`: hsl(221, 12%, 14%) - Dark blue-gray
- `fog`: hsl(216, 4%, 51%) - Mid-gray
- `dove`: hsl(222, 19%, 86%) - Light gray
- `sunset`: hsl(22, 100%, 51.6%) - Orange accent
- `dawn`: hsl(37, 100%, 76%) - Yellow accent

**Tailwind Guidelines**:
- Use Tailwind utility classes instead of custom CSS when possible
- Use the custom color palette (`text-jet`, `bg-sunset`, etc.) for consistency
- Use responsive breakpoints (`sm:`, `md:`, `lg:`) for responsive design
- Use Tailwind's spacing scale (e.g., `p-4`, `m-6`, `gap-3`)

### Linting

- Follow the ESLint configuration in `eslint.config.mjs`
- Extends `next/core-web-vitals` and `next/typescript`
- Avoid modifying files in: `node_modules/`, `.next/`, `out/`, `build/`, `next-env.d.ts`

## File Organization

```
app/
  ├── api/           # API routes
  ├── chat/          # Chat-related routes
  ├── components/    # Reusable React components
  ├── terms/         # Terms & Conditions page
  ├── page.tsx       # Home page
  ├── layout.tsx     # Root layout
  └── globals.css    # Global styles
public/              # Static assets (images, SVGs, fonts)
```

### Component Structure

- Place reusable components in `app/components/`
- Use PascalCase for component file names (e.g., `ChatBox.tsx`, `MessageBubble.tsx`)
- Export components as default exports
- Keep component files focused on a single component

## Security & Privacy

### Data Protection
- Never commit API keys, secrets, or credentials to the repository
- Use environment variables (`.env.local`) for sensitive data
- Never log sensitive user information

### User Privacy
- This project serves the LGBTQ+ community - be especially mindful of user privacy and data security
- Implement proper authentication and authorization for user data
- Follow GDPR and privacy best practices

### Safe Coding
- Validate and sanitize all user inputs
- Use parameterized queries for database operations
- Implement proper error handling without exposing sensitive information
- Use HTTPS for all external API calls

## API Routes

- API routes go in `app/api/` directory
- Use proper HTTP methods (GET, POST, PUT, DELETE)
- Return appropriate status codes
- Handle errors gracefully with proper error messages

## Testing

Currently, the project does not have a testing framework configured. When adding tests:
- Consider using Jest and React Testing Library for React components
- Place test files adjacent to the files they test with `.test.ts` or `.spec.ts` suffix
- Write tests that validate component behavior, not implementation details

## Deployment

- The application is deployed on Vercel
- Configuration is in `vercel.json`
- The build command is `npm run build`
- Ensure all builds pass before merging

## Inclusive Language & Content

This project serves the LGBTQ+ community. When generating content, comments, or documentation:
- Use inclusive, respectful language
- Be sensitive to LGBTQ+ terminology and culture
- Default to gender-neutral pronouns when appropriate
- Ensure features are accessible and welcoming to all users

## Documentation

- Use JSDoc comments for complex functions and public APIs
- Document component props with TypeScript interfaces
- Keep inline comments minimal and meaningful
- Update README.md when adding major features

## Performance Considerations

- Use Next.js Image component for images (`next/image`)
- Implement lazy loading for large components
- Use React.memo() for expensive component renders
- Minimize client-side JavaScript when possible
- Use Next.js App Router features for optimal performance

## Don't

- Don't use `console.log` in production code - use proper logging if needed
- Don't commit `node_modules/`, `.next/`, `.env*` files
- Don't bypass TypeScript type checking with `@ts-ignore` without good reason
- Don't create inline styles when Tailwind utilities can be used
- Don't add new dependencies without considering bundle size impact
- Don't remove or modify the LGBTQ+ inclusive messaging and branding
