export default function Footer({ config }) {
  const { footer } = config

  return (
    <footer className="w-full max-w-[1380px] mx-auto px-6 md:px-8 pb-12 md:pb-16 pt-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-8">
        <span className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-text-muted">
          {footer.name}
        </span>
        <span className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-text-muted">
          {footer.tagline}
        </span>
      </div>
    </footer>
  )
}
