# jeremiahelbuba.me

Personal website for **Prince Jeremiah Isa El-Buba** — built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and lucide-react.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before launch

Swap placeholder content in **`src/lib/content.ts`**:

- Email and social profile URLs
- Bio, pull quote, and faith verse
- Hero and about portrait images
- Gallery photos

## Contact form (Formspree)

1. Create a free account at [formspree.io](https://formspree.io).
2. Click **New Form** and set the notification email to `jeremiahisaelbuba@gmail.com`.
3. Copy your **Form ID** (the code after `/f/` in the form URL, e.g. `https://formspree.io/f/xyzabcde` → `xyzabcde`).
4. Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id_here
```

5. Restart the dev server (`npm run dev`).
6. On Vercel: Project Settings → Environment Variables → add the same variable, then redeploy.

Test by submitting the contact form — Formspree will email Jeremiah each submission.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Add **`NEXT_PUBLIC_FORMSPREE_FORM_ID`** in Environment Variables.
4. Add your custom domain **`www.jeremiahelbuba.me`** in Project Settings → Domains.
5. Point your domain’s DNS to Vercel (A/CNAME records as shown in the dashboard).

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
