import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import FeatureCard from './FeatureCard'
import { featuresSection } from '../../data/content'
import './Features.css'

export default function Features() {
  if (!featuresSection.items.length) return null

  return (
    <section
      className="section section--alt features"
      id="keunggulan"
      aria-labelledby="keunggulan-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={featuresSection.eyebrow}
            title={featuresSection.title}
            subtitle={featuresSection.subtitle}
            id="keunggulan-title"
          />
        </Reveal>

        <ul className="features__grid">
          {featuresSection.items.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 60}>
              <FeatureCard icon={item.icon} title={item.title} description={item.description} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
