# SETUP.md — Desplegament i configuració

## Stack de serveis gratuïts

| Servei | Ús | Cost |
|---|---|---|
| Vercel | Hosting Next.js | Gratuït |
| Formspree | Formulari de contacte | Gratuït (50/mes) |
| Gmail | Email de contacte | Gratuït |
| GitHub | Repositori + CI/CD | Gratuït |

---

## PAS 1 — Gmail professional

1. Ves a https://gmail.com → "Crear compte"
2. Noms recomanats: `arc.fontrodona@gmail.com` / `arcfontrodona@gmail.com`
3. Actualitza `YOUR_EMAIL` a `lib/data.ts`

---

## PAS 2 — Formspree

1. Crea compte a https://formspree.io amb el Gmail anterior
2. Crea formulari nou → copia l'endpoint (`https://formspree.io/f/XXXXXXXX`)
3. Substitueix `YOUR_FORMSPREE_ENDPOINT` a `components/sections/Contact.tsx`

---

## PAS 3 — Primer desplegament a Vercel (recomanat per Next.js)

```bash
cd web-nextjs
npm install
npm run build

npm install -g vercel
vercel
# Segueix el wizard, connecta amb GitHub
# Vercel detecta Next.js automàticament. HTTPS i CDN inclosos.
```

---

## PAS 4 — Actualitzar placeholders a `lib/data.ts`

```
YOUR_EMAIL           → arc.fontrodona@gmail.com
YOUR_GITHUB_URL      → https://github.com/TU_USUARI
YOUR_LINKEDIN_URL    → https://linkedin.com/in/TU_PERFIL
YOUR_WEB_URL         → https://de-la-terra-al-codi.vercel.app
YOUR_FORMSPREE_ENDPOINT → https://formspree.io/f/XXXXXXXX
```

---

## Afegir un projecte al portfolio

```typescript
// lib/data.ts → portfolioProjects
{
  id: 4,
  title: "Nom del projecte",
  description: "Descripció breu del que fa i per a qui.",
  tags: ["Next.js", "Claude API"],
  category: "App",
  url: "https://github.com/...",
  status: "live",
}
```

## Desplegar canvis

```bash
git add .
git commit -m "feat: descripció del canvi"
git push
# Vercel redesplega automàticament en 30-60 segons
```
