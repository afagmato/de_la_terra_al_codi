import { owner } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t border-border-color py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-text-secondary text-sm">
        <p className="font-grotesk">
          {owner.name} · {owner.headline}
        </p>
        <p className="font-mono text-xs">
          © {year} · Fet amb Next.js
        </p>
      </div>
    </footer>
  )
}
