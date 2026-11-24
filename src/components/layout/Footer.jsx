import Container from '../common/Container'
import { Instagram, Music2 } from 'lucide-react'
import { footer, logo, navLinks, shop, ui } from '../../data/content'
import { buildInstagramUrl, buildTikTokUrl } from '../../utils/format'
import './Footer.css'

export default function Footer() {
  const instagramUrl = buildInstagramUrl(shop.socials.instagram)
  const tiktokUrl = buildTikTokUrl(shop.socials.tiktok)
  const hasSocials = Boolean(instagramUrl || tiktokUrl)
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container className="footer__inner">
        <div className="footer__brand">
          <a className="footer__brand-link" href="#beranda" aria-label={ui.brandHomeLabel}>
            <img src={logo} alt="" width="44" height="44" loading="lazy" decoding="async" />
            <span className="footer__name">{shop.name}</span>
          </a>
          {footer.tagline && <p className="footer__tagline">{footer.tagline}</p>}
        </div>

        <nav className="footer__nav" aria-label={ui.footerNavLabel}>
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="footer__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {hasSocials && (
          <div className="footer__socials">
            {instagramUrl && (
              <a
                className="footer__social"
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} aria-hidden="true" />
                <span>{ui.socials.instagram}</span>
              </a>
            )}
            {tiktokUrl && (
              <a
                className="footer__social"
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Music2 size={18} aria-hidden="true" />
                <span>{ui.socials.tiktok}</span>
              </a>
            )}
          </div>
        )}

        <p className="footer__copyright">
          © {year} {shop.name}. {ui.footerRights}
        </p>
      </Container>
    </footer>
  )
}
