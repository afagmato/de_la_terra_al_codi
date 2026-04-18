'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { portfolioProjects, portfolioCategories } from '@/lib/data'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import SectionTitle from '@/components/ui/SectionTitle'

export default function Portfolio() {
  const [active, setActive] = useState('Tots')

  const filtered = active === 'Tots'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Portfolio"
          subtitle="Projectes reals per a problemes reals."
          accent="secondary"
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-200 ${
                active === cat
                  ? 'bg-accent-secondary text-bg-primary font-medium'
                  : 'border border-border-color text-text-secondary hover:border-accent-secondary hover:text-accent-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {/* PORTFOLIO: afegir projectes a lib/data.ts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full flex flex-col">
                  {project.status === 'placeholder' && (
                    <span className="inline-block mb-3 px-2 py-0.5 rounded text-xs font-mono bg-accent-warm/10 text-accent-warm border border-accent-warm/30">
                      Pròximament
                    </span>
                  )}
                  <h3 className="font-grotesk text-lg font-semibold text-text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  {project.status !== 'placeholder' && (
                    <a
                      href={project.url}
                      className="flex items-center gap-2 text-accent-secondary text-sm hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Veure projecte <ExternalLink size={14} />
                    </a>
                  )}
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
