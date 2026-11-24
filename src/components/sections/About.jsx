import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { about } from '../../data/content'
import { getIcon } from '../../utils/icons'
import './About.css'

export default function About() {
  return (
    <section className="section section--alt about" id="tentang" aria-labelledby="tentang-title">
      <Container className="about__inner">
        <Reveal className="about__media">
          <img
            className="about__image"
            src={about.image}
            alt={about.imageAlt}
            width="1000"
            height="563"
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <Reveal className="about__content" delay={100}>
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            id="tentang-title"
            align="start"
          />

          <p className="about__story">{about.story}</p>

          <ul className="about__points">
            {about.points.map((point) => {
              const Icon = getIcon(point.icon)

              return (
                <li className="about__point" key={point.id}>
                  <span className="about__point-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={2.2} />
                  </span>
                  <span>{point.text}</span>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
