import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // GitHub Pages project sites are served under /<repo-name>/.
  // When running in GitHub Actions, derive the base path from GITHUB_REPOSITORY.
  const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const base = isGitHubActions && repoName ? `/${repoName}/` : "/";

  return {
    base,
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
