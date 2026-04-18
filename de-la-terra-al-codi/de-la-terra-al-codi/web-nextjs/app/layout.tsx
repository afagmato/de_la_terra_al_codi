import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arç Fontrodona · Polímata Pràctic · De la Terra al Codi',
  description: "Gestor d'edificis, instal·lador elèctric autoritzat i desenvolupador d'apps i automatitzacions per a pimes. Esparreguera, Barcelona.",
  keywords: ['manteniment edificis Barcelona', 'instal·lador elèctric', 'automatitzacions pimes', 'apps autònoms'],
  openGraph: {
    title: 'Arç Fontrodona · De la Terra al Codi',
    description: 'Gestió, tecnologia i serveis per a pimes i autònoms.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca">
      <body>{children}</body>
    </html>
  )
}
