# mikeavello.com

Personal portfolio site for **Mike Avello** — Engineering Leader with 18+ years building web platforms and the teams behind them.

**Live site:** [mikeavello.com](https://mikeavello.com)

---

## About

A single-page portfolio and resume site built to showcase experience, expertise, and contact information for prospective employers and collaborators.

## Tech Stack

- **[Vite](https://vitejs.dev/)** — build tooling and dev server
- **[React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)** — component architecture
- **[SCSS](https://sass-lang.com/) with CSS Modules** — per-component scoped styles
- **Google Fonts** — [Fraunces](https://fonts.google.com/specimen/Fraunces) (headings) + [Inter](https://fonts.google.com/specimen/Inter) (body)

## Features

- Responsive design with mobile hamburger navigation
- Scroll-triggered reveal animations with `prefers-reduced-motion` support
- Fixed nav with active section highlighting and avatar slide-in
- JSON-LD structured data for SEO
- `llms.txt` for AI-readable site summary
- Optimized LCP with preloaded avatar image

## Project Structure

```
src/
  components/     # Nav, Hero, About, Experience, Expertise, Contact, Footer
  hooks/          # useInView — reusable IntersectionObserver hook
  styles/         # Global SCSS: variables, mixins, reset, main
public/
  avatar.png
  favicon.svg
  Mike-Avello-Resume.pdf
  llms.txt
  robots.txt
  sitemap.xml
```

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```
