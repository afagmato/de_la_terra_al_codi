interface SectionTitleProps {
  title: string
  subtitle?: string
  accent?: 'primary' | 'secondary' | 'warm'
}

export default function SectionTitle({ title, subtitle, accent = 'primary' }: SectionTitleProps) {
  const accentColor = {
    primary: 'text-accent-primary',
    secondary: 'text-accent-secondary',
    warm: 'text-accent-warm',
  }

  return (
    <div className="text-center mb-16">
      <h2 className={`font-grotesk text-4xl md:text-5xl font-bold mb-4 ${accentColor[accent]}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="separator mt-6 max-w-xs mx-auto" />
    </div>
  )
}
