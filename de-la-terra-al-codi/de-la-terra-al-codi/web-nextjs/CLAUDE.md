# CLAUDE.md — web-nextjs

## Init

1. Llegeix `/CLAUDE.md` (context del propietari)
2. Llegeix `/docs/web/CLAUDE.md` (specs completes de la web)
3. Genera tots els fitxers del projecte Next.js seguint les specs
4. No preguntes res, executa en ordre: package.json → globals.css → lib/data.ts → layout.tsx → components/ui → components/sections → app/page.tsx

## Ordre de generació

```
package.json
next.config.js
tailwind.config.ts
tsconfig.json
app/globals.css
lib/data.ts
components/ui/Badge.tsx
components/ui/Card.tsx
components/ui/SectionTitle.tsx
components/ui/Navbar.tsx
components/sections/Hero.tsx
components/sections/About.tsx
components/sections/Services.tsx
components/sections/Portfolio.tsx
components/sections/Contact.tsx
components/sections/Footer.tsx
app/layout.tsx
app/page.tsx
```

## Verificació final

```bash
npm install
npm run build
npm run dev
```

La web ha de compilar sense errors i ser visible a http://localhost:3000
