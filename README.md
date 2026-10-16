# Nemuel Lim — Profile

Personal profile site for [Nemuel Lim](https://github.com/limnemuel22). Built with React, Tailwind CSS, and Vite. Ready to deploy on Vercel.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push this repo to GitHub (`limnemuel22/my-profile`).
2. In [Vercel](https://vercel.com), import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output: `dist`.
4. Deploy. Later pushes to `main` will auto-deploy.

## Edit your content

Update `src/data/profile.js` for name, about copy, experience, skills, projects, and social links.

## Google search

The site is set up so searches for **Nemuel Lim**, **Nemuel Sumagui Lim**, **Nem**, and **Nem Profile** can find this page. Share previews use `public/og.jpg` as the thumbnail.

After you deploy:

1. Put your live URL in `src/data/profile.js` (`siteUrl`), `index.html` canonical/og tags, `public/robots.txt`, and `public/sitemap.xml`.
2. In [Google Search Console](https://search.google.com/search-console), add the Vercel URL and submit `sitemap.xml`.
3. Ask Google to index the homepage. Ranking for a short name like **Nem** takes time and works best as **Nem Profile** or **Nemuel Lim**.
