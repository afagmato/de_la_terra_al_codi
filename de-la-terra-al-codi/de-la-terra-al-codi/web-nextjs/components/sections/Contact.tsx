'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Github, Linkedin, Send } from 'lucide-react'
import { owner } from '@/lib/data'
import SectionTitle from '@/components/ui/SectionTitle'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('YOUR_FORMSPREE_ENDPOINT', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacte" className="py-24 px-6 bg-bg-primary">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          title="Parlem"
          subtitle="Si tens un problema concret, t'escolto. Si necessites algú que sàpiga fer coses, estic aquí."
          accent="primary"
        />

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 mb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              required
              placeholder="Nom"
              className="bg-bg-card border border-border-color rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary transition-colors"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="bg-bg-card border border-border-color rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary transition-colors"
            />
          </div>

          <select
            name="motiu"
            className="w-full bg-bg-card border border-border-color rounded-lg px-4 py-3 text-text-secondary focus:outline-none focus:border-accent-primary transition-colors"
          >
            <option value="">Motiu del contacte</option>
            <option value="manteniment">Manteniment d'edificis</option>
            <option value="electricitat">Instal·lació elèctrica</option>
            <option value="tecnologia">Tecnologia / App / Automatització</option>
            <option value="altres">Altres</option>
          </select>

          <textarea
            name="message"
            required
            rows={5}
            placeholder="Explica'm el que necessites"
            className="w-full bg-bg-card border border-border-color rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary transition-colors resize-none"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="flex items-center gap-2 px-8 py-3 bg-accent-primary text-white font-grotesk font-medium rounded-lg hover:bg-accent-primary/80 transition-colors disabled:opacity-50"
          >
            <Send size={16} />
            {status === 'sending' ? 'Enviant...' : 'Enviar missatge'}
          </button>

          {status === 'success' && (
            <p className="text-accent-secondary text-sm">Missatge enviat. Et respondré aviat.</p>
          )}
          {status === 'error' && (
            <p className="text-accent-warm text-sm">Hi ha hagut un error. Prova-ho de nou.</p>
          )}
        </motion.form>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center text-text-secondary text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-accent-primary" />
            {owner.location}
          </div>
          <a
            href={owner.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-text-primary transition-colors"
          >
            <Github size={16} className="text-accent-primary" />
            GitHub
          </a>
          <a
            href={owner.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-text-primary transition-colors"
          >
            <Linkedin size={16} className="text-accent-primary" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
