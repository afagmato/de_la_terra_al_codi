'use client'

import { motion } from 'framer-motion'
import { Building2, Zap, Code2 } from 'lucide-react'
import { services } from '@/lib/data'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import SectionTitle from '@/components/ui/SectionTitle'

const icons = { Building2, Zap, Code2 }

export default function Services() {
  return (
    <section id="serveis" className="py-24 px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Serveis"
          subtitle="Tres línies de servei sota una mateixa lògica: detectar el problema, dimensionar la solució i executar-la."
          accent="warm"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons]
            const accent = service.accent as 'primary' | 'secondary' | 'warm'
            const iconColor = {
              primary: 'text-accent-primary',
              secondary: 'text-accent-secondary',
              warm: 'text-accent-warm',
            }[accent]

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card accent={accent} className="h-full flex flex-col">
                  <Icon size={32} className={`mb-4 ${iconColor}`} />
                  <h3 className="font-grotesk text-xl font-semibold text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant={accent}>{tag}</Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
