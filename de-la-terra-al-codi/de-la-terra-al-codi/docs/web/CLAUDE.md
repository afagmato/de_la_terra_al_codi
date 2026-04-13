# CLAUDE.md — Web (Next.js)

> Llegeix primer `/CLAUDE.md` de l'arrel per al context complet del propietari.

## Init

Llegeix `/CLAUDE.md` i aquest fitxer. Genera la web completa seguint les especificacions. Comença per `package.json`, després `app/layout.tsx`, `app/page.tsx` i els components per ordre de secció. No preguntes res, executa.

---

## Stack

| Tecnologia | Versió | Ús |
|---|---|---|
| Next.js | 14+ (App Router) | Framework principal |
| React | 18+ | UI |
| TypeScript | 5+ | Tipat |
| Tailwind CSS | 3+ | Estils |
| Framer Motion | latest | Animacions |
| Lucide React | latest | Icones |
| Formspree | API REST | Formulari de contacte |

---

## Disseny

### Paleta de colors
```css
/* globals.css */
--bg-primary: #0a0a0f;
--bg-secondary: #12121a;
--bg-card: #1a1a2e;
--accent-primary: #6c63ff;    /* Violeta elèctric */
--accent-secondary: #00d4aa;  /* Verd menta */
--accent-warm: #ff6b35;       /* Taronja càlid */
--text-primary: #e8e8f0;
--text-secondary: #9090a8;
--border: #2a2a3e;
```

### Tipografia (Google Fonts)
```
Space Grotesk  → títols i headlines
Inter          → cos de text
JetBrains Mono → codi, tags, accents tècnics
```

### Estil visual
- Dark mode per defecte (no toggle necessari)
- Gradients subtils amb els colors accent
- Cards amb `border` lluminós en hover via `box-shadow`
- Partícules o grid de punts animat al hero (lleuger, CSS o canvas)
- Animacions d'entrada amb Framer Motion (`fadeInUp`, `staggerChildren`)
- Glassmorphism subtil als cards (`backdrop-blur`, `bg-opacity`)
- Separadors amb gradients (`from-transparent via-accent to-transparent`)

---

## Estructura de fitxers

```
web-nextjs/
├── app/
│   ├── layout.tsx             ← Root layout, fonts, metadata
│   ├── page.tsx               ← Pàgina principal (importa totes les seccions)
│   └── globals.css            ← Variables CSS, reset, utilitats globals
├── components/
│   ├── sections/
│   │   ├── Hero.tsx           ← Typewriter + CTAs
│   │   ├── About.tsx          ← Sobre mi + Timeline
│   │   ├── Services.tsx       ← 3 cards de serveis
│   │   ├── Portfolio.tsx      ← Grid filtrable de projectes
│   │   ├── Contact.tsx        ← Formulari Formspree
│   │   └── Footer.tsx         ← Links + copyright dinàmic
│   └── ui/
│       ├── Navbar.tsx         ← Nav fixa amb scroll effect
│       ├── Card.tsx           ← Card reutilitzable
│       ├── Badge.tsx          ← Tag/badge de tecnologia
│       └── SectionTitle.tsx   ← Títol de secció consistent
├── lib/
│   └── data.ts                ← Totes les dades del propietari (no hardcoded als components)
├── public/
│   └── (imatges futures)
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Dades (`lib/data.ts`)

Totes les dades han d'estar centralitzades aquí, mai hardcoded als components.

```typescript
export const owner = {
  name: "Arç Fontrodona",
  location: "Esparreguera, Barcelona",
  headline: "Polímata Pràctic · De la Terra al Codi",
  subheadline: "Gestió, Tecnologia i Serveis per a Pimes",
  email: "YOUR_EMAIL",
  github: "YOUR_GITHUB_URL",
  linkedin: "YOUR_LINKEDIN_URL",
  web: "YOUR_WEB_URL",
}

export const typewriterPhrases = [
  "Gestor d'edificis i instal·lador elèctric",
  "Desenvolupador d'apps i automatitzacions per a pimes",
  "25 anys emprenent de la terra fins al codi",
]

export const timeline = [
  { year: "1994", label: "Actor de teatre amateur", desc: "Onze anys sobre els escenaris" },
  { year: "1999", label: "Jardineria i prevenció d'incendis", desc: "Ajuntaments i Diputació de Barcelona" },
  { year: "1999", label: "Doblatge per a TV3", desc: "Sèries de dibuixos animats" },
  { year: "2001", label: "Recaderia especialitzada", desc: "Gestió documental sensible a Barcelona" },
  { year: "2006", label: "Promotor de concerts", desc: "Música electrònica, logística i coordinació" },
  { year: "2007", label: "Comerç internacional", desc: "Corea, Cuba, Àfrica Occidental" },
  { year: "2015", label: "Tres cooperatives", desc: "Transport, transformació social, web i comunicació" },
  { year: "2019", label: "Cistelles Ecològiques", desc: "Hort per subscripció comunitària" },
  { year: "2021", label: "Focus actual", desc: "Tecnologia, electricitat i edificis" },
]

export const services = [
  {
    icon: "Building2",
    title: "Manteniment d'edificis",
    description: "Gestió integral per a comunitats de propietaris i administradors de finques. Coordinació tècnica, seguiment i gestió administrativa.",
    tags: ["Comunitats", "Admins de finques", "Barcelona"],
    accent: "primary",
  },
  {
    icon: "Zap",
    title: "Instal·lació elèctrica",
    description: "Instal·lador autoritzat. Instal·lacions residencials i de comunitats amb garantia de compliment normatiu.",
    tags: ["Autoritzat", "Residencial", "Comunitats"],
    accent: "warm",
  },
  {
    icon: "Code2",
    title: "Tecnologia per a pimes",
    description: "Apps, automatitzacions i eines d'IA a mida per a autònoms i pimes. Solucions reals per a problemes reals.",
    tags: ["Apps", "Automatització", "IA", "Web"],
    accent: "secondary",
  },
]

export const portfolioProjects = [
  // Placeholder — omplir amb projectes reals
  {
    id: 1,
    title: "Automatització de facturació",
    description: "Sistema d'automatització per generar i enviar factures automàticament per a un autònom.",
    tags: ["Python", "Make", "Gmail API"],
    category: "Automatització",
    url: "#",
    status: "placeholder",
  },
  {
    id: 2,
    title: "Web per a negoci local",
    description: "Web de presentació amb formulari de contacte i integració de Google Maps per a comerç local.",
    tags: ["Next.js", "Tailwind", "Formspree"],
    category: "Web",
    url: "#",
    status: "placeholder",
  },
  {
    id: 3,
    title: "Eina IA per a pressupostos",
    description: "Assistent que genera pressupostos personalitzats a partir d'una conversa en llenguatge natural.",
    tags: ["Claude API", "React", "PDF"],
    category: "Eina IA",
    url: "#",
    status: "placeholder",
  },
]

export const portfolioCategories = ["Tots", "App", "Automatització", "Web", "Eina IA"]
```

---

## Seccions detallades

### Hero
- Fons: gradient radial fosc amb accent violeta subtil + grid de punts CSS
- Nom en tipografia gran (`Space Grotesk`, bold, `text-6xl md:text-8xl`)
- Typewriter sota el nom, cursor parpellejant, cicle infinit amb pausa
- Dos botons CTA amb estil diferent (primary filled / secondary outlined)
- Scroll indicator animat a la part inferior

### About
- Dos paràgrafs de text + timeline vertical
- Paràgraf 1: qui és Arç avui (tres pilars)
- Paràgraf 2: la filosofia ("cul inquiet que fa que passin coses" — adaptat professionalment)
- Timeline: punts connectats per línia vertical, any destacat en accent color, animació stagger
- Badges d'idiomes al final: Català · Castellà · Anglès (en reactivació)
- `<!-- TODO: foto -->` placeholder visible al costat del text

### Services
- Grid de 3 cards (`grid-cols-1 md:grid-cols-3`)
- Cada card: icona Lucide + títol + descripció + tags
- Hover: `border-color` canvia a l'accent corresponent + `box-shadow` glow
- Accent de color diferent per a cada pilar (violeta / taronja / verd)

### Portfolio
- Filtres de categoria com a pills/tabs (animació amb Framer Motion)
- Grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Cards: títol, descripció, tags de tecnologia, botó `Veure projecte`
- Cards placeholder amb badge "Pròximament" si `status === "placeholder"`
- Comentari: `{/* PORTFOLIO: afegir projectes a lib/data.ts */}`

### Contact
- Títol: "Parlem"
- Subtítol honest i directe
- Formulari:
  - Nom, Email, Motiu (select), Missatge
  - `action` a Formspree (`YOUR_FORMSPREE_ENDPOINT`)
  - Gestió d'estat: idle / sending / success / error
  - Feedback visual sense recarregar pàgina
- Sota el formulari: ubicació, GitHub, LinkedIn com a links amb icones

### Navbar
- Fixa al top, `position: fixed`
- Fons transparent → `bg-bg-primary/90 backdrop-blur` en fer scroll
- Links d'ancoratge suau a cada secció
- Logo/nom a l'esquerra, links a la dreta
- Hamburger menu en mòbil

---

## Placeholders a substituir

| Placeholder | Fitxer | Descripció |
|---|---|---|
| `YOUR_EMAIL` | `lib/data.ts` | Gmail professional |
| `YOUR_GITHUB_URL` | `lib/data.ts` | Perfil GitHub |
| `YOUR_LINKEDIN_URL` | `lib/data.ts` | Perfil LinkedIn |
| `YOUR_WEB_URL` | `lib/data.ts` | URL de la web desplegada |
| `YOUR_FORMSPREE_ENDPOINT` | `components/sections/Contact.tsx` | Endpoint Formspree |

---

## SEO (`app/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: "Arç Fontrodona · Polímata Pràctic · De la Terra al Codi",
  description: "Gestor d'edificis, instal·lador elèctric autoritzat i desenvolupador d'apps i automatitzacions per a pimes. Esparreguera, Barcelona.",
  keywords: ["manteniment edificis Barcelona", "instal·lador elèctric", "automatitzacions pimes", "apps autònoms"],
  openGraph: {
    title: "Arç Fontrodona · De la Terra al Codi",
    description: "Gestió, tecnologia i serveis per a pimes i autònoms.",
    type: "website",
  },
}
```

---

## Desplegament

### Opció A — Vercel (recomanada per Next.js, gratuïta)
```bash
npm install -g vercel
vercel
# Segueix el wizard → desplegament automàtic
# URL: https://de-la-terra-al-codi.vercel.app (o personalitzada)
```

### Opció B — GitHub Pages (requereix exportació estàtica)
```js
// next.config.js
const nextConfig = { output: 'export' }
```
```bash
npm run build  # genera carpeta /out
# Pujar /out a GitHub Pages
```

**Recomanació: Vercel.** Next.js és de Vercel, integració perfecta, HTTPS automàtic, desplegament continu des de GitHub.
