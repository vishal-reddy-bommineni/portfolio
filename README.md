# Vishal Reddy Bommineni · Portfolio

Personal portfolio: data science, bioinformatics and healthcare analytics projects.
Built with React 19, Vite and Tailwind CSS 4, with animated components adapted from
[React Bits](https://reactbits.dev).

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```
Requires Node.js 20 or newer.

## Editing content
All text lives in `src/data/content.js`: profile and links, stats, about, experience, projects,
skills and education. The components only render it.

- **Resume:** put the PDF in `public/resume/` named exactly `Vishal_Reddy_Bommineni_Resume.pdf`.
- **Live demos:** set a project's `demo` field to its URL and a "Live demo" button appears.
- **Project images:** `public/projects/<slug>.webp` (about 1400 px wide).

## Structure
```
index.html                 page title, description, social preview tags, fonts
public/                    favicon, social preview image, project images, resumes
src/data/content.js        all site content
src/components/            Navbar, Hero, Sections (stats, about, experience, projects, skills, contact)
src/components/reactbits/  animated components from React Bits
```

## Deployment
Deployed on Vercel: import the GitHub repository, keep the detected Vite settings
(build `npm run build`, output `dist`). Every push to `main` redeploys.

`vercel.json` serves the site for any address, so `/cv` (the link used in the resume PDF) shows the
same page while Vercel Analytics counts it separately from `/`.

## Credits
Animated components adapted from React Bits by David Haz (MIT + Commons Clause);
see `THIRD_PARTY_NOTICES.md`.
