# CLAUDE.md — LinkedIn

> Llegeix primer `/CLAUDE.md` de l'arrel per al context complet.

## Objectiu

Generar tots els textos del perfil de LinkedIn d'Arç Fontrodona en català.
Quan estiguin aprovats, traduir al castellà i posteriorment a l'anglès.

## Límits de caràcters LinkedIn

| Secció | Límit |
|---|---|
| Titular (Headline) | 220 caràcters |
| Resum (About) | 2.600 caràcters |
| Descripció de posició | 2.000 caràcters |
| Nom del càrrec | 100 caràcters |

## Titular aprovat

```
Polímata Pràctic · De la Terra al Codi · Gestió, Tecnologia i Serveis per a Pimes
```

## Tasques per ordre

- [ ] `02_sobre_mi.md` — Resum / About (màx. 2.600 car.)
- [ ] `03_experiencia/` — Una descripció per cada posició
- [ ] `04_formacio.md` — Formació i títols
- [ ] `05_habilitats.md` — Skills per a LinkedIn (màx. 50)
- [ ] `06_recomanacions.md` — A qui demanar recomanació i per a quin rol
- [ ] Traducció castellà (`versions/es/`)
- [ ] Traducció anglès (`versions/en/`) — quan el nivell d'anglès estigui reactivat

## Estructura de carpetes

```
docs/linkedin/
├── CLAUDE.md
├── 01_titular.md
├── 02_sobre_mi.md
├── 03_experiencia/
│   ├── 2021_autonom_actual.md
│   ├── 2019_cistelles_ecologiques.md
│   ├── 2015_cooperatives.md
│   ├── 2006_promotor_concerts.md
│   ├── 2007_comercio_internacional.md
│   ├── 2001_recaderia.md
│   └── 1999_jardineria.md
├── 04_formacio.md
├── 05_habilitats.md
├── 06_recomanacions.md
└── versions/
    ├── es/
    └── en/
```

## Instruccions de generació

- To: directe, proper, sense tòpics corporatius
- Mai: "apassionat per", "orientat a resultats", "proactiu"
- La diversitat no és dispersió: és un patró consistent d'emprenedoria real
- Inclou l'experiència artística (teatre, doblatge) — reforça el perfil polímata
- L'experiència de promotor de concerts reforça la gestió d'equips i logística
