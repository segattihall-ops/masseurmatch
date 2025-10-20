This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Mobile Responsiveness

MasseurMatch is optimized for mobile devices with the following features:

### Mobile-Friendly Features
- ✅ Viewport meta tag configured for proper scaling on all devices
- ✅ Touch targets minimum 44x44px for easy finger navigation
- ✅ Responsive text sizes using Tailwind's responsive classes (sm:, md:, lg:)
- ✅ Touch-optimized CSS with `-webkit-tap-highlight-color`
- ✅ Responsive spacing and padding for different screen sizes
- ✅ Flexible grid layouts that adapt to screen width
- ✅ Optimized ChatBox component for mobile interaction

### Testing Mobile Responsiveness

#### Using Chrome DevTools
1. Open Chrome and navigate to your local or deployed site
2. Press `F12` or `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac)
3. Click the device toolbar icon (or press `Ctrl+Shift+M` / `Cmd+Shift+M`)
4. Test with different device presets:
   - iPhone SE (375x667)
   - iPhone 12 Pro (390x844)
   - Pixel 5 (393x851)
   - iPad (768x1024)
   - iPad Pro (1024x1366)

#### Using Firefox Responsive Design Mode
1. Press `Ctrl+Shift+M` (Windows/Linux) or `Cmd+Option+M` (Mac)
2. Select different device sizes from the dropdown
3. Test touch events and scrolling behavior

#### Manual Testing on Physical Devices
For best results, test on actual mobile devices:
1. Deploy to Vercel or use a local tunnel (e.g., ngrok)
2. Access the site on your mobile device
3. Test all interactive elements:
   - Chat input field
   - Send button
   - Terms & Conditions checkbox
   - Navigation and scrolling
   - Text readability

#### Key Areas to Test
- **Header**: Should be properly sized and readable on small screens
- **Hero Text**: "LGBTQ+ MASSAGE DIRECTORY" should scale appropriately
- **ChatBox**: Should be accessible and functional on mobile
- **Touch Targets**: All buttons and inputs should be easy to tap
- **Text Readability**: All text should be legible without zooming
- **Scrolling**: Smooth scrolling should work properly

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
