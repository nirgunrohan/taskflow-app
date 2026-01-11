# Deployment to Vercel

Steps to deploy this project to Vercel:

1. Create a new project in Vercel and link your GitHub repo (or import the repo in the Vercel UI).
2. In Vercel project settings, set Environment Variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - (optional) `VITE_SUPABASE_PROJECT_ID`
3. In your GitHub repository, create these repository secrets:
   - `VERCEL_TOKEN` (create a token in your Vercel account)
   - `VERCEL_ORG_ID` (get from Vercel project settings)
   - `VERCEL_PROJECT_ID` (get from Vercel project settings)
4. Push to `main` — the GitHub Action will build the project and deploy to Vercel automatically.

Notes:
- The project uses `npm run build` and serves the `dist` folder.
- If you prefer not to use GitHub Actions, you can connect the repo directly in the Vercel UI and add env vars there.
