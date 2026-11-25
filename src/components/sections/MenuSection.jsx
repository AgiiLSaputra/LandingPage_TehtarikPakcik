import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import MenuCard from './MenuCard'
import { menuSection } from '../../data/content'
import './MenuSection.css'

export default function MenuSection() {
  if (!menuSection.items.length) return null

  return (
    <section className="section menu-section" id="menu" aria-labelledby="menu-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={menuSection.eyebrow}
            title={menuSection.title}
            subtitle={menuSection.subtitle}
            id="menu-title"
          />
        </Reveal>

        <ul className="menu-section__grid">
          {menuSection.items.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 60}>
              <MenuCard item={item} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
