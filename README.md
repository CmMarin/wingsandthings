
  # Design Wings and Things Palette

  This is a code bundle for Design Wings and Things Palette. The original project is available at https://www.figma.com/design/URoPr67QOqTqTyzb8A1i05/Design-Wings-and-Things-Palette.

  ## Running locally

  Recommended: use `pnpm` (this repo includes a `pnpm-workspace.yaml`). If you don't have it, install globally:

  ```bash
  npm install -g pnpm
  ```

  Install dependencies:

  ```bash
  pnpm install
  # or: npm install
  # or: yarn install
  ```

  Start development server:

  ```bash
  pnpm dev
  # or: npm run dev
  ```

  Build for production:

  ```bash
  pnpm build
  # or: npm run build
  ```

  Preview a production build locally:

  ```bash
  pnpm preview
  # or: npm run preview
  ```

  Notes:
  - The bundle lists `react` and `react-dom` as peerDependencies. If you see warnings about missing peer dependencies, install them:

  ```bash
  pnpm add react react-dom
  # or: npm install react react-dom
  ```

  - Use Node.js 18+ for best compatibility.
  