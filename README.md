This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact form

The contact form opens the visitor's email app with a prepared message addressed to `zaidsaleem375@gmail.com`. The visitor must send the draft from their email app.

## Deploy on GitHub Pages

This project is configured for a static GitHub Pages export. To use the root URL `https://zaid2694.github.io/`:

1. Create a new, empty GitHub repository named `Zaid2694.github.io`. Keep the existing `Portfolio` repository so its Vercel deployment remains connected.
2. In the new repository's **Settings → Pages**, set the source to **GitHub Actions**.
3. Commit the site changes, then add the new repository as a remote and push the `main` branch:

   ```bash
   git remote add pages https://github.com/Zaid2694/Zaid2694.github.io.git
   git push pages HEAD:main
   ```

4. The workflow in `.github/workflows/deploy.yml` builds the site and publishes the `out` directory. Open `https://zaid2694.github.io/` after the Pages deployment completes.

GitHub Pages does not run Next.js server routes. The contact form therefore opens an email draft instead of sending email directly.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
