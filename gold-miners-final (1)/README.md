# Gold Miners Investment (Next.js 12 Pages Router)

This project is a Next.js 12 (pages router) scaffold configured for deployment to Netlify + Supabase (recommended) or Vercel.

## Recommended free advanced platform (best for a perfect demo)
I recommend **Netlify** for hosting the Next.js site and **Supabase** for the database:
- Netlify has a generous free tier and supports Next.js (OpenNext adapter) with serverless functions.
- Supabase provides a free Postgres database and authentication, ideal for persisting deposits across deployments.

## Setup (Netlify + Supabase)
1. Create a Supabase project and create a table `deposits` with columns: id (uuid or serial), amount (int), status (text), ts (timestamp default now).
2. In Supabase, create a service_role key (use as SUPABASE_SERVICE_KEY). Keep it secret.
3. In Netlify project settings (or Vercel), set these environment variables:
   - SUPABASE_URL = your Supabase URL
   - SUPABASE_SERVICE_KEY = your Supabase service role key
   - ADMIN_PASS = PK.
   - NEXT_PUBLIC_ADMIN_PASS = PK. (optional for client-side checks)
4. Deploy the site on Netlify (connect your Git repo or upload ZIP) and the API routes will use Supabase for persistence.

## Run locally
1. Copy `.env.example` to `.env` and set SUPABASE_URL and SUPABASE_SERVICE_KEY plus ADMIN_PASS.
2. npm install
3. npm run dev
4. Open http://localhost:3000
