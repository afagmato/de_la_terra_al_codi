interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'warm'
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-bg-secondary text-text-secondary border border-border-color',
    primary: 'bg-accent-primary/10 text-accent-primary border border-accent-primary/30',
    secondary: 'bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/30',
    warm: 'bg-accent-warm/10 text-accent-warm border border-accent-warm/30',
  }

  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-mono ${variants[variant]}`}>
      {children}
    </span>
  )
}
