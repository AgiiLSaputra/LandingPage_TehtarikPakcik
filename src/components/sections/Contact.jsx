import { Instagram, MessageCircle, Music2 } from 'lucide-react'
import Container from '../common/Container'
import Button from '../common/Button'
import Reveal from '../common/Reveal'
import { contactSection, shop, ui } from '../../data/content'
import { buildInstagramUrl, buildTikTokUrl, buildWhatsAppUrl } from '../../utils/format'
import './Contact.css'

export default function Contact() {
  const whatsappUrl = buildWhatsAppUrl(shop.whatsapp, ui.whatsappMessage)
  const instagramUrl = buildInstagramUrl(shop.socials.instagram)
  const tiktokUrl = buildTikTokUrl(shop.socials.tiktok)
  const hasSocials = Boolean(instagramUrl || tiktokUrl)

  return (
    <section className="section contact" id="kontak" aria-labelledby="kontak-title">
      <Container>
        <Reveal className="contact__card">
          <p className="contact__eyebrow">{contactSection.eyebrow}</p>
          <h2 className="contact__title" id="kontak-title">
            {contactSection.title}
          </h2>
          <p className="contact__subtitle">{contactSection.subtitle}</p>

          <Button
            className="contact__cta"
            variant="whatsapp"
            size="lg"
            href={whatsappUrl}
            disabled={!whatsappUrl}
            disabledReason={ui.whatsappUnavailable}
            icon={<MessageCircle aria-hidden="true" />}
          >
            {contactSection.ctaLabel}
          </Button>

          {hasSocials && (
            <div className="contact__socials">
              <span className="contact__socials-label">{contactSection.socialLabel}</span>
              {instagramUrl && (
                <a
                  className="contact__social"
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
                  className="contact__social"
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
        </Reveal>
      </Container>
    </section>
  )
}
