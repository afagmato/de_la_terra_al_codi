interface CardProps {
  children: React.ReactNode
  className?: string
  accent?: 'primary' | 'secondary' | 'warm'
}

export default function Card({ children, className = '', accent }: CardProps) {
  const accentHover = {
    primary: 'hover:border-accent-primary hover:shadow-[0_0_20px_rgba(108,99,255,0.15)]',
    secondary: 'hover:border-accent-secondary hover:shadow-[0_0_20px_rgba(0,212,170,0.15)]',
    warm: 'hover:border-accent-warm hover:shadow-[0_0_20px_rgba(255,107,53,0.15)]',
  }

  return (
    <div
      className={`
        bg-bg-card border border-border-color rounded-xl p-6
        backdrop-blur-sm transition-all duration-300
        ${accent ? accentHover[accent] : 'hover:border-accent-primary/50'}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
