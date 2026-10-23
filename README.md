# The Beef Shop — WebDevPro Independent Storefront
**Website designer and developer:** [WebDevPro](https://www.webdevpro.co.za)

This is the independently maintained **The Beef Shop** online meat-shop storefront, deployed from this GitHub repository to Vercel. It has **no original website-builder runtime or tooling dependencies** and does not require any package installation or build command.

## Project structure
- \`index.html\` — accessible site shell, navigation and footer
- \`styles/site.css\` — entire responsive design system
- \`scripts/main.js\` — pages, hero carousel, storefront interface and checkout enquiry
- \`scripts/catalog.js\` — editable product catalogue and images
- \`scripts/cart.js\` — shopping basket, browser storage and quantity updates
- \`scripts/chatbot.js\` — independently managed WhatsApp enquiry assistant
- \`assets/the-beef-shop.svg\` — original The Beef Shop cattle-head logo
- \`manifest.webmanifest\` + \`sw.js\` — progressive web app installation and offline shell
- \`vercel.json\` — deployment routes and security headers

## Deployment
1. Import the repository in Vercel under a project named \`thebishop\`. Choose **Other** framework with the repository root as the root directory.
2. Set Build Command **empty / override off**, and Output Directory **root** (default when deploying static files).
3. Automatic deployments occur on commits to \`main\`.
4. Verify \`/\`, \`/shop\`, \`/boxes\`, \`/cart\`, \`/checkout\`, and the mobile chatbot.

## Important merchant notes
This edition **does not fabricate prices or claim that orders have been paid/recorded**. It assembles a complete shopping enquiry and opens WhatsApp for merchant confirmation. The shopping basket remains on the user's device. No backend or admin authentication is claimed.

Product descriptions and contact number were adapted from the user's provided meat-shop project. Confirm that phone number +263 717 064 123, deliveries, branding and operating details belong to The Beef Shop before commercial launch. Pricing, official domain, terms, and privacy copy should receive merchant review.

Product photography is served from Unsplash (no builder-specific asset links). Replace those external URLs in \`scripts/catalog.js\` and \`scripts/main.js\` with owned/licensed images if desired.

## Developer credit
Copyright website design and implementation — **WebDevPro**.
https://www.webdevpro.co.za

## Original brand restoration (23 October 2026)
The original cattle-head logo has been recovered from the supplied original project files and stored locally at `assets/beef-shop-logo.webp`. Typography restored: Anton (headings), Manrope (body), Caveat (tagline). The logo is an optimized image copy of the original 512px brand artwork. Cache version bumped to serve updates to returning visitors.
