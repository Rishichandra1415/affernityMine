# AffenitySport

Next.js starter project with a clean, industry-level folder structure that is easy to understand and scale.

## Run the Project

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Folder Structure

```text
src/
  app/                    # Next.js App Router pages, layouts, global styles
  components/             # Reusable shared UI and layout components
    layout/
  config/                 # App-level configuration (site, env mapping)
  constants/              # Static constants (navigation, labels, keys)
  features/               # Feature-based modules grouped by domain
    home/
      components/
  hooks/                  # Reusable React hooks
  lib/                    # Generic utilities and helper functions
  services/               # API/service layer for backend communication
  types/                  # Shared TypeScript types and interfaces
```

## Recommended Team Conventions

- Keep shared code in `components`, `lib`, `hooks`, `types`.
- Keep business/domain code inside `features/<feature-name>`.
- Keep API calls in `services` and avoid direct fetch calls in UI components.
- Add route-specific UI under `app/<route>` and move reusable pieces to `features`.

## Next Improvements

- Add authentication (for admin/team management)
- Add API route handlers under `src/app/api`
- Add testing with Vitest + React Testing Library
- Add lint-staged and pre-commit hooks
