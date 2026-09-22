# Brown Open Silicon

The website for **Brown Open Silicon (BOS)** — a student-run club at Brown University
dedicated to open-source chip design and VLSI education.

We're an open-source club, so this site is open source too. Whether you're a BOS member,
a Brown student who's never written a line of TypeScript, or someone from the wider
open-silicon community who just wants to fix a typo — **you're welcome here.** Pull
requests of every size are appreciated.

[![live site](https://img.shields.io/badge/live-bos--amber.vercel.app-C00404)](https://bos-amber.vercel.app)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/brubru6707/BOS/pulls)
[![good first issues](https://img.shields.io/github/issues/brubru6707/BOS/good%20first%20issue?label=good%20first%20issues)](https://github.com/brubru6707/BOS/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

🌐 **[bos-amber.vercel.app](https://bos-amber.vercel.app)** — the live site
🔗 [brubru6707/BOS](https://github.com/brubru6707/BOS) — the source

---

## The BLOC framework

Everything we do comes back to four ideas:

| | |
|---|---|
| **B**uild | tapeout design, reproducible VLSI workflows |
| **L**earn | VLSI and chip design, project management skills |
| **O**pen | open-source tools for chip design, open to all students |
| **C**onnect | industry leaders, leading researchers |

---

## Quick start

You'll need [Node.js](https://nodejs.org) 20 or newer.

```bash
git clone https://github.com/brubru6707/BOS.git
cd BOS
npm install
cp .env.example .env.local   # optional — see "Environment variables" below
npm run dev
```

Open <http://localhost:3000>. Edits hot-reload as you save.

| Command | What it does |
|---|---|
| `npm run dev` | dev server with hot reload |
| `npm run build` | production build — **run this before opening a PR** |
| `npm start` | serve the production build locally |
| `npx tsc --noEmit` | typecheck without emitting files |

### Environment variables

The only external service we use is Firebase, and only for the "interested in joining"
form on `/projects`. Copy `.env.example` to `.env.local` and fill in your own Firebase
project's values if you're working on that form.

**Every other page runs fine with those variables blank**, so don't let this block you.

---

## Tech stack

- **[Next.js 16](https://nextjs.org)** (App Router) + **React 19**
- **TypeScript**
- **[Tailwind CSS](https://tailwindcss.com)** for styling
- **[Framer Motion](https://www.framer.com/motion/)** for animations
- **[React Three Fiber](https://r3f.docs.pmnd.rs/)** + **Three.js** for the 3D logo scene
- **[lucide-react](https://lucide.dev)** for icons
- **Firebase (Firestore)** for the interest form
- Deployed on **[Vercel](https://vercel.com)**

---

## Project layout

```
app/                      routes (Next.js App Router)
  page.tsx                landing page + 3D scene + curriculum ladder
  bloc/                   the BLOC framework page
  team/                   current-year roster
  team/[year]/            archived rosters (e.g. /team/2025-2026)
  projects/               projects, meetings, interest form
  meetings/[meeting]/     PDF slide viewer for a single meeting
  globals.css             Tailwind layers + .grid-bg utility
components/
  Navigation.tsx          top nav
  Footer.tsx              footer, including the year archive links
  TeamRoster.tsx          renders one academic year's roster
  YearSwitcher.tsx        year tabs + the teamHref() url helper
  Scene.tsx  SceneClient.tsx   the 3D logo
src/
  data/years.ts           ⭐ year-scoped club data (roster + meetings)
  lib/firebase.js         Firestore client + interest-form submit
public/                   images, meeting PDFs, .glb models
```

---

## Common contributions

### Add or update an officer

Everything about the roster lives in [`src/data/years.ts`](src/data/years.ts). Add a
`Member` to the current year's `members` array:

```ts
{
  name: "Your Name",
  role: "officer",                      // shown in red under the name
  // the next three are optional — leave them out and the card just
  // shows your name, role, photo and linkedin
  title: "3rd year undergraduate",      // class year or position
  credentials: "focus: analog design",  // focus area or accolade
  description: "one-line bio.",
  group: "officer",                     // "faculty" | "founding" | "officer"
  image: "/yourname.png",               // drop a square image in public/
  linkedin: "https://www.linkedin.com/in/you/",   // optional
}
```

Photos should be **square** (512×512 works well) and live in `public/`.

### Roll over to a new academic year

1. Add a new `AcademicYear` at the **top** of `academicYears` in `src/data/years.ts`
2. Point `CURRENT_YEAR` at its slug

That's it. The previous year stays browsable at `/team/<slug>`, and the year tabs, the
footer archive links and the `/projects` meeting groups all pick it up automatically.

### Add a meeting

Drop the slide deck in `public/meetings/` and add a `Meeting` to that year's `meetings`
array in `src/data/years.ts`. The slug becomes the URL: `/meetings/<slug>`.

### Add a project

Projects live in the `projects` array at the top of
[`app/projects/page.tsx`](app/projects/page.tsx), with images in `public/images/`.

---

## Style notes

A few conventions that keep the site feeling like one thing:

- **Body copy is lowercase.** Headings, labels and buttons are written lowercase on
  purpose — it's the site's voice. Proper nouns (people's names, course codes) keep their
  capitalization.
- **The accent color is `brown-red` (`#C00404`)**, defined in `tailwind.config.ts`. Use
  the Tailwind token (`text-brown-red`, `bg-brown-red`) rather than a raw hex value.
- **Dark background throughout** — `bg-black` with `white/70`-style translucent text.
- **`.grid-bg`** (in `app/globals.css`) is the faint grid used behind hero sections.
- Prefer **Server Components**; add `"use client"` only when a file actually needs
  state, effects or browser APIs.

---

## Contributing

1. **Fork** the repo and create a branch: `git checkout -b my-change`
2. Make your change
3. Check it builds: `npm run build`
4. **Open a pull request** describing what changed and why

Some ways to help, roughly easiest first:

- fix a typo, a broken link, or an awkward sentence
- add your own officer entry and photo
- improve mobile layout on a page that feels cramped
- add `alt` text, focus states, or other accessibility fixes
- add a project or write up a past one
- take on something from the [issues](https://github.com/brubru6707/BOS/issues)

**Not sure where to start, or not sure your idea fits?** Open an issue and ask. Questions
are contributions too — if something about this README or the codebase confused you, that's
a bug in our docs and we'd like to hear about it.

You don't need to be a BOS member, a Brown student, or a chip designer to contribute here.

---

## Code of conduct

Be kind, be patient, and assume good faith. This is a student club — a lot of people here
are learning, and "I don't know how this works" is always an acceptable thing to say. We
don't tolerate harassment or belittling of any kind.

---

## License

[MIT](LICENSE) — use it, fork it, learn from it. If this site is a useful starting point
for your own club's page, take it and run.

The MIT license covers the **code**. Club content — member photos, meeting slide decks,
and the BOS name and logo — belongs to Brown Open Silicon and its members, so please
swap those out rather than shipping them as your own.

---

## Contact

- **Email:** [wilson_vo@brown.edu](mailto:wilson_vo@brown.edu)
- **Issues & discussion:** [github.com/brubru6707/BOS/issues](https://github.com/brubru6707/BOS/issues)
- **Team:** [the current officers and advisors](https://github.com/brubru6707/BOS) — or see `/team` on the live site
