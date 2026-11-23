import { useRef } from 'react'
import { useInView } from '../../hooks/useInView'
import './Reveal.css'

/**
 * Animasi fade + naik 16px sekali saja saat elemen masuk viewport.
 * Otomatis nonaktif pada `prefers-reduced-motion: reduce` (lihat Reveal.css).
 *
 * @param {object} props
 * @param {number} [props.delay] penundaan dalam milidetik
 * @param {import('react').ElementType} [props.as]
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const ref = useRef(null)
  const inView = useInView(ref)

  const classes = ['reveal', inView ? 'is-visible' : '', className].filter(Boolean).join(' ')

  return (
    <Tag ref={ref} className={classes} style={{ '--reveal-delay': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}
