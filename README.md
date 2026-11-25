# Portfolio

Run locally: `npm install` then `npm run dev`.
Build: `npm run build` (output in `dist/`).

Deploy free: push to GitHub, then import the repo on vercel.com or netlify.com (build command `npm run build`, output `dist`).

Personal details live at the top of `src/App.jsx` (ME, JOBS, PROJECTS, CERTS).
- Photo: put `photo.jpg` in `public/` and set `photo: "./photo.jpg"` in ME.
- Resume: put `resume.pdf` in `public/` and set `resume: "./resume.pdf"` in ME.
- Project extras: add a fifth item to a PROJECTS entry, e.g. `{ demo: "https://...", result: "F1 0.91", image: "./shots/rag.png" }`.
