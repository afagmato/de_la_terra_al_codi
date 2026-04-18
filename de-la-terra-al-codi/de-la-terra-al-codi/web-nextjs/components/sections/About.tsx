'use client'

import { motion } from 'framer-motion'
import { timeline } from '@/lib/data'
import SectionTitle from '@/components/ui/SectionTitle'
import Badge from '@/components/ui/Badge'

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Sobre mi"
          subtitle="He après a treballar amb el cos, amb les mans, amb la veu i amb els números."
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-text-secondary leading-relaxed">
              No perquè ho planifiqués, sinó perquè cada etapa em va demanar una cosa diferent i vaig aprendre a donar-la.
            </p>
            <p className="text-text-secondary leading-relaxed">
              He après a coordinar grups de persones i a dirigir actors a l'escenari, a conduir maquinària pesant en terrenys difícils i a prendre decisions quan el marge d'error és zero. He après a negociar en mercats internacionals, a gestionar cooperatives i a construir producte des de zero.
            </p>
            <p className="text-text-primary font-medium leading-relaxed">
              Ara combino tots aquests aprenentatges amb tecnologia.
            </p>

            {/* Idiomes */}
            <div className="flex gap-2 pt-4 flex-wrap">
              <Badge variant="primary">Català</Badge>
              <Badge variant="secondary">Castellà</Badge>
              <Badge>Anglès (en reactivació)</Badge>
            </div>

            {/* TODO: foto */}
            {/* <div className="mt-8 rounded-xl bg-bg-card border border-border-color h-64 flex items-center justify-center text-text-secondary text-sm font-mono">TODO: foto</div> */}
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border-color" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex gap-6 pl-12 relative"
                >
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-bg-card border border-accent-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent-primary" />
                  </div>
                  <div>
                    <span className="font-mono text-accent-primary text-xs">{item.year}</span>
                    <p className="text-text-primary font-medium text-sm">{item.label}</p>
                    <p className="text-text-secondary text-xs mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
