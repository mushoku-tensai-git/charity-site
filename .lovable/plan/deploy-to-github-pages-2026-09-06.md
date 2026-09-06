# Deploy to GitHub Pages

## Goal
Make this Ember Foundation site live on GitHub Pages with automatic deploys on every push.

## What we'll do

1. **Configure Vite for GitHub Pages**
   - Add the correct `base` path to `vite.config.ts` so asset URLs resolve under the repo name.
   - Add a `homepage` field to `package.json` for tooling that reads it.

2. **Add SPA routing fallback**
   - GitHub Pages serves only static files and returns 404 on deep links like `/ourmission`.
   - Add a `404.html` page that redirects any path back to `index.html` while preserving the route, so `BrowserRouter` works after refresh.

3. **Add a GitHub Actions deploy workflow**
   - Create `.github/workflows/deploy.yml` that builds the site on every push to `main` and publishes the `dist/` folder to GitHub Pages.

4. **Update `package.json` deploy scripts (optional but helpful)**
   - Add ` predeploy` / `deploy` scripts if you ever want to deploy manually from the terminal.

## What you need to do in GitHub

- Create a public GitHub repository for this project (or connect it via Lovable's GitHub integration).
- Go to **Settings → Pages** and set the source to **GitHub Actions**.
- Push the changes from this plan. The workflow will run and publish the site.

## Result

Your site will be available at `https://<your-username>.github.io/<repo-name>/` and will update automatically when you push to `main`.
