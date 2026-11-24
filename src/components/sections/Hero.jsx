import { ArrowRight, MessageCircle } from 'lucide-react'
import Container from '../common/Container'
import Button from '../common/Button'
import { hero, logo, shop, ui } from '../../data/content'
import { buildWhatsAppUrl } from '../../utils/format'
import { getIcon } from '../../utils/icons'
import './Hero.css'

export default function Hero() {
  const whatsappUrl = buildWhatsAppUrl(shop.whatsapp, ui.whatsappMessage)

  return (
    <section className="hero" id="beranda" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <img
          className="hero__bg-image"
          src={hero.image}
          alt=""
          width="1600"
          height="900"
          loading="eager"
          decoding="sync"
        />
      </div>

      <Container className="hero__inner">
        <div className="hero__content">
          <p className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            {hero.badge}
          </p>

          <h1 className="hero__title" id="hero-title">
            {hero.titleLead} <span className="hero__title-accent">{hero.titleAccent}</span>{' '}
            {hero.titleRest}
          </h1>

          <p className="hero__subtitle">{hero.subtitle}</p>

          <div className="hero__actions">
            <Button
              variant="accent"
              size="lg"
              href="#menu"
              iconAfter={<ArrowRight aria-hidden="true" />}
            >
              {hero.primaryCta}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={whatsappUrl}
              disabled={!whatsappUrl}
              disabledReason={ui.whatsappUnavailable}
              icon={<MessageCircle aria-hidden="true" />}
            >
              {hero.secondaryCta}
            </Button>
          </div>

          <ul className="hero__stats">
            {hero.stats.map((stat) => (
              <li className="hero__stat" key={stat.id}>
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__mark">
          <div className="hero__rings">
            <img
              className="hero__logo"
              src={logo}
              alt=""
              width="256"
              height="256"
              decoding="async"
            />
          </div>

          {hero.highlights.map((item, index) => {
            const Icon = getIcon(item.icon)

            return (
              <article className={`hero__card hero__card--${index + 1}`} key={item.id}>
                <span className="hero__card-icon" aria-hidden="true">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <div>
                  <p className="hero__card-title">{item.title}</p>
                  <p className="hero__card-meta">{item.meta}</p>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
