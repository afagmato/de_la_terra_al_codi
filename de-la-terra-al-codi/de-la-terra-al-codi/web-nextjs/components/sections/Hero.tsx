'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { owner, typewriterPhrases } from '@/lib/data'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const phrase = typewriterPhrases[phraseIndex]
    let i = 0
    let timeout: NodeJS.Timeout

    if (typing) {
      const interval = setInterval(() => {
        setDisplayed(phrase.slice(0, i + 1))
        i++
        if (i === phrase.length) {
          clearInterval(interval)
          timeout = setTimeout(() => setTyping(false), 2000)
        }
      }, 45)
      return () => { clearInterval(interval); clearTimeout(timeout) }
    } else {
      let j = phrase.length
      const interval = setInterval(() => {
        setDisplayed(phrase.slice(0, j - 1))
        j--
        if (j === 0) {
          clearInterval(interval)
          setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length)
          setTyping(true)
        }
      }, 25)
      return () => clearInterval(interval)
    }
  }, [phraseIndex, typing])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center dot-grid overflow-hidden">
      {/* Gradient radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(108,99,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-accent-primary text-sm mb-4 tracking-widest uppercase">
            {owner.location}
          </p>

          <h1 className="font-grotesk text-6xl md:text-8xl font-bold text-text-primary mb-6 leading-tight">
            {owner.name}
          </h1>

          <div className="h-10 mb-8">
            <p className="font-mono text-accent-secondary text-lg md:text-xl">
              {displayed}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-text-secondary text-lg mb-12 max-w-xl mx-auto">
            {owner.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#serveis"
              className="px-8 py-3 bg-accent-primary text-white font-grotesk font-medium rounded-lg hover:bg-accent-primary/80 transition-colors"
            >
              Veure serveis
            </a>
            <a
              href="#contacte"
              className="px-8 py-3 border border-accent-primary text-accent-primary font-grotesk font-medium rounded-lg hover:bg-accent-primary/10 transition-colors"
            >
              Parlem
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ArrowDown size={20} className="text-text-secondary" />
      </motion.div>
    </section>
  )
}
