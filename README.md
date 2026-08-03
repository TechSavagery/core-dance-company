# Core Dance Company

Next.js + Sanity rebuild for [Core Dance SLO](https://www.coredanceslo.com/).

## Stack

- **Next.js** (App Router)
- **Sanity** CMS (embedded Studio at `/admin`)
- **Vercel** hosting
- Datasets: `staging` (dev) and `production` (main / future prod)

## Local development

```bash
cp .env.example .env.local
# fill NEXT_PUBLIC_SANITY_PROJECT_ID and DATASET
npm install
npm run dev
```

- Site: http://localhost:3000
- Studio: http://localhost:3000/admin

## Environments

| Branch | Dataset | Domain |
|--------|---------|--------|
| `dev` | `staging` | `coredanceslo.techsavagery.net` |
| `main` | `production` | future production domain |
