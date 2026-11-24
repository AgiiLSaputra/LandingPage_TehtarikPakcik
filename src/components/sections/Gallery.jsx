import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { gallerySection } from '../../data/content'
import './Gallery.css'

export default function Gallery() {
  if (!gallerySection.items.length) return null

  return (
    <section className="section gallery" id="galeri" aria-labelledby="galeri-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={gallerySection.eyebrow}
            title={gallerySection.title}
            subtitle={gallerySection.subtitle}
            id="galeri-title"
          />
        </Reveal>

        <ul className="gallery__grid">
          {gallerySection.items.map((item, index) => (
            <Reveal as="li" className="gallery__item" key={item.id} delay={index * 50}>
              <img
                className="gallery__image"
                src={item.src}
                alt={item.alt}
                width="800"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
