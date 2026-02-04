# AGENTS.md

**Overview**
Personal portfolio site for Jonas Palm (web developer) with a home page, projects listing, project detail pages, and a contact page.

**Stack**
- Astro 5 (TypeScript, `type: "module"`).
- Astro Content Collections for project data, authored in MDX.
- `astro:assets` for optimized images.

**Hosting**
- Deployed on Vercel.

**Styling**
- Hand-authored CSS (no framework).
- Global design tokens in `src/styles/tokens.css`.
- Component/page-scoped `<style>` blocks.
- JetBrains Mono variable font with dark/light theme via CSS variables.

**Content**
- Projects live in `src/content/projects/*.mdx` with schema in `src/content/config.ts`.
