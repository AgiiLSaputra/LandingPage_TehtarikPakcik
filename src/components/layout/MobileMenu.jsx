import { useEffect, useRef } from 'react'
import { MessageCircle } from 'lucide-react'
import Button from '../common/Button'
import { navLinks, shop, ui } from '../../data/content'
import { buildWhatsAppUrl } from '../../utils/format'
import './MobileMenu.css'

/**
 * Panel navigasi untuk layar < 1024px.
 * Hanya dirender saat terbuka, jadi tidak ada elemen tersembunyi yang
 * bisa difokus keyboard. Ditutup dengan tombol Esc atau saat tautan diklik.
 */
export default function MobileMenu({ id, activeId, onNavigate, onClose }) {
  const firstLinkRef = useRef(null)
  const whatsappUrl = buildWhatsAppUrl(shop.whatsapp, ui.whatsappMessage)

  useEffect(() => {
    firstLinkRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div className="mobile-menu">
      <nav className="container mobile-menu__inner" id={id} aria-label={ui.mobileMenuLabel}>
        <ul className="mobile-menu__list">
          {navLinks.map((link, index) => {
            const isActive = link.href === `#${activeId}`

            return (
              <li key={link.href}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  className={`mobile-menu__link${isActive ? ' is-active' : ''}`}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={onNavigate}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <Button
          className="mobile-menu__cta"
          variant="whatsapp"
          href={whatsappUrl}
          disabled={!whatsappUrl}
          disabledReason={ui.whatsappUnavailable}
          icon={<MessageCircle />}
          onClick={onNavigate}
        >
          {ui.whatsappCta}
        </Button>
      </nav>
    </div>
  )
}
