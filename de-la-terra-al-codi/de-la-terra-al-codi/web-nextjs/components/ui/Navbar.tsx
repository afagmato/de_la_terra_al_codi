'use client'

import { useState, useEffect } from 'react'
import { owner } from '@/lib/data'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#sobre-mi', label: 'Sobre mi' },
  { href: '#serveis', label: 'Serveis' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contacte', label: 'Contacte' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border-color' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-grotesk font-bold text-text-primary hover:text-accent-primary transition-colors">
          {owner.name}
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          className="md:hidden text-text-secondary hover:text-text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-bg-primary/95 backdrop-blur-md border-b border-border-color">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
