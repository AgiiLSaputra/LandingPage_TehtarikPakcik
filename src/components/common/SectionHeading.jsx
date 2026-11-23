import './SectionHeading.css'

/**
 * Judul seragam untuk setiap section.
 *
 * @param {object} props
 * @param {string} [props.eyebrow] label kecil di atas judul
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {string} [props.id] id untuk elemen <h2> agar bisa dipakai `aria-labelledby`
 * @param {'center'|'start'} [props.align='center']
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
  align = 'center',
  className = '',
}) {
  const classes = ['section-heading', `section-heading--${align}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  )
}
