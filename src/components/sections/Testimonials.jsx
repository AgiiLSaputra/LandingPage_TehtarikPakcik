import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import TestimonialCard from './TestimonialCard'
import { testimonialsSection } from '../../data/content'
import './Testimonials.css'

/**
 * Hanya dirender bila ada testimoni asli (PRD 6, AC-09).
 */
export default function Testimonials() {
  if (!testimonialsSection.items.length) return null

  return (
    <section
      className="section testimonials"
      id="testimoni"
      aria-labelledby="testimoni-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={testimonialsSection.eyebrow}
            title={testimonialsSection.title}
            subtitle={testimonialsSection.subtitle}
            id="testimoni-title"
          />
        </Reveal>

        <ul className="testimonials__grid">
          {testimonialsSection.items.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 60}>
              <TestimonialCard name={item.name} text={item.text} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
