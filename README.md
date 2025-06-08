# JudgeDice v7 Site

This is my personal website built with Next.js and using components from my Storybook library.

## Development

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Run the development server:
   ```bash
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

1. Build the site:
   ```bash
   yarn build
   ```

2. Start the production server:
   ```bash
   yarn start
   ```

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment is handled by GitHub Actions.

## Project Structure

- `src/app/` - Next.js app directory containing pages and layouts
- `src/components/` - React components specific to this site
- `../judgedicev7-storybook/` - Shared component library

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- GitHub Pages
- GitHub Actions 