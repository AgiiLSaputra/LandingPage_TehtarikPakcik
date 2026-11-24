import { useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '../common/Container'
import Button from '../common/Button'
import MobileMenu from './MobileMenu'
import { useScrolled } from '../../hooks/useScrolled'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { logo, navLinks, shop, ui } from '../../data/content'
import { buildWhatsAppUrl } from '../../utils/format'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(24)

  const sectionIds = useMemo(() => navLinks.map((link) => link.href.replace('#', '')), [])
  const activeId = useScrollSpy(sectionIds)
  const whatsappUrl = buildWhatsAppUrl(shop.whatsapp, ui.whatsappMessage)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ' navbar--top'}`}>
      <Container className="navbar__inner">
        <a className="navbar__brand" href="#beranda" aria-label={ui.brandHomeLabel}>
          <img
            className="navbar__logo"
            src={logo}
            alt=""
            width="40"
            height="40"
            decoding="async"
          />
          <span className="navbar__name">{shop.name}</span>
        </a>

        <nav className="navbar__nav" aria-label={ui.navLabel}>
          <ul className="navbar__list">
            {navLinks.map((link) => {
              const isActive = link.href === `#${activeId}`

              return (
                <li key={link.href}>
                  <a
                    className={`navbar__link${isActive ? ' is-active' : ''}`}
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="navbar__actions">
          <Button
            className="navbar__cta"
            variant="whatsapp"
            size="sm"
            href={whatsappUrl}
            disabled={!whatsappUrl}
            disabledReason={ui.whatsappUnavailable}
          >
            {ui.whatsappCta}
          </Button>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={menuOpen ? ui.closeMenuLabel : ui.openMenuLabel}
            aria-expanded={menuOpen}
            aria-controls="menu-seluler"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <MobileMenu
          id="menu-seluler"
          activeId={activeId}
          onNavigate={() => setMenuOpen(false)}
          onClose={() => setMenuOpen(false)}
        />
      )}
    </header>
  )
}
