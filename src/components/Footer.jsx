export default function Footer({ config }) {
  const { footer } = config

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <span className="footer__text">{footer.credit}</span>
        </div>
        <div className="footer__right">
          <span className="footer__text footer__text--muted">{footer.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
