import { getIcon } from '../../utils/icons'
import './FeatureCard.css'

/**
 * Kartu keunggulan: ikon, judul, deskripsi.
 */
export default function FeatureCard({ icon, title, description }) {
  const Icon = getIcon(icon)

  return (
    <article className="feature-card">
      <span className="feature-card__icon" aria-hidden="true">
        <Icon size={24} strokeWidth={2} />
      </span>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{description}</p>
    </article>
  )
}
