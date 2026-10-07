# Two Years With You

A romantic, responsive anniversary site built with React, TypeScript, Vite, Tailwind CSS, and Motion.

## Run it locally

Install Node.js 20 or newer, then run:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To check the production build:

```sh
npm run build
npm run preview
```

## Make it yours

Almost all visitor-facing words, dates, image choices, memories, and all 20 emotion messages live in **[`src/data/content.ts`](./src/data/content.ts)**. Edit the clearly marked `siteContent` object there—no React knowledge is needed.

- Change both names, the anniversary date, and the hero, story, and closing copy in that file.
- Each memory has its own date, title, description, and optional image.
- The emotions array contains exactly 20 editable cards, each with its own emoji and personal response.
- Set photo paths in the `gallery` and memory entries to choose which images appear.

### Add your photos

Put image files in **`public/images/`**, then use paths such as `/images/our-first-trip.jpg` in `src/data/content.ts`. The site includes graceful, styled placeholders until you add a photo. Descriptive `alt` text can be edited alongside each gallery image. Keep image files reasonably compressed for a fast mobile experience.

## Deploy with GitHub Pages

The included GitHub Actions workflow builds and deploys the site whenever you push to `main`. In the repository settings, open **Pages** and select **GitHub Actions** as the build and deployment source. The Vite base path is already configured for this repository name (`/2-Year-Anniversary/`).

For a differently named repository, update `base` in `vite.config.ts` to `/<repository-name>/`.
