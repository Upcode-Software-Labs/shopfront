# ShopFront (CommerceJS UI)

ShopFront is a fully functional, feature rich, JamStack (https://jamstack.org/) UI, open source web application which utilizes CommerceJS (headless eCommerce) .

Stack includes

- Next.js
- React Stripe Elements
- Commerce.js
- Vercel

## Motivation

We saw headless commerce (especially Commerce JS) and the Jamstack really take off, with developers flocking to this new way of building, optimizing, and maintaining sites. We utilized the capabilities of CommerceJS and Vecel Commerce and took the best of both and merged them.

## Prerequisites

- pnpm (https://pnpm.io/motivation)
- CommerceJS and NextJS integration (https://commercejs.com/docs/guides/nextjs-integration)

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js Commerce. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control your Shopify store.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`
4. Install pnpm (https://pnpm.io/installation) : `curl -fsSL https://get.pnpm.io/install.sh | sh -`

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## How to Deploy with Vercel

- Make sure your build is passing `pnpm run build`
- [Install Vercel Client](https://vercel.com/docs/cli) or simply run `pnpm i -g vercel`
- Check Vercel version `vercel --version` and ensure that the installation is proper.
- [Create an account](https://vercel.com/signup) in Vercel if you don't have already.
- Run `vercel` from terminal and fill the details accordingly
- Deploy to production `vercel --prod`

### Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Upcode-Software-Labs/shopfront)

## How to Contribute

Read [CONTRIBUTING.md](./CONTRIBUTING.md) for more details if you work at [Upcode](https://www.upcode.in) and want to run locally and / or contribute
