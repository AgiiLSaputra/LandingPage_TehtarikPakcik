import { Quote } from 'lucide-react'
import './TestimonialCard.css'

/**
 * Kartu testimoni. Hanya dipakai untuk testimoni asli.
 */
export default function TestimonialCard({ name, text }) {
  return (
    <figure className="testimonial-card">
      <Quote className="testimonial-card__mark" size={24} aria-hidden="true" />
      <blockquote className="testimonial-card__text">{text}</blockquote>
      <figcaption className="testimonial-card__name">{name}</figcaption>
    </figure>
  )
}
