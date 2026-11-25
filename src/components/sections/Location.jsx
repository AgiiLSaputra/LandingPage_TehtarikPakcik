import { Clock, MapPin, Navigation } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import Reveal from '../common/Reveal'
import { locationSection, shop, ui } from '../../data/content'
import './Location.css'

export default function Location() {
  const hasAddress = Boolean(shop.address.trim())
  const hasHours = Boolean(shop.openHours.trim())
  const hasMap = Boolean(shop.mapsUrl.trim())

  return (
    <section className="section location" id="lokasi" aria-labelledby="lokasi-title">
      <Container className="location__inner">
        <Reveal className="location__content">
          <SectionHeading
            eyebrow={locationSection.eyebrow}
            title={locationSection.title}
            subtitle={locationSection.subtitle}
            id="lokasi-title"
            align="start"
          />

          <ul className="location__list">
            <li className="location__row">
              <span className="location__icon" aria-hidden="true">
                <MapPin size={20} />
              </span>
              <div>
                <p className="location__label">{ui.labels.address}</p>
                <p className={hasAddress ? 'location__value' : 'location__value is-placeholder'}>
                  {hasAddress ? shop.address : ui.placeholder}
                </p>
              </div>
            </li>

            <li className="location__row">
              <span className="location__icon" aria-hidden="true">
                <Clock size={20} />
              </span>
              <div>
                <p className="location__label">{ui.labels.openHours}</p>
                <p className={hasHours ? 'location__value' : 'location__value is-placeholder'}>
                  {hasHours ? shop.openHours : ui.placeholder}
                </p>
              </div>
            </li>
          </ul>

          <Button
            variant="secondary"
            href={hasMap ? shop.mapsUrl : null}
            disabled={!hasMap}
            disabledReason={ui.mapsUnavailable}
            icon={<Navigation aria-hidden="true" />}
          >
            {ui.mapsCta}
          </Button>
        </Reveal>

        <Reveal className="location__map" delay={100} aria-hidden="true">
          <div className="location__map-grid">
            <span className="location__pin">
              <MapPin size={22} />
            </span>
            <span className="location__map-label">{shop.name}</span>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
