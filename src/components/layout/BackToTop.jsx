import { ArrowUp } from 'lucide-react'
import { useScrolled } from '../../hooks/useScrolled'
import { ui } from '../../data/content'
import './BackToTop.css'

/**
 * Tombol kembali ke atas. Muncul setelah halaman digulir lebih dari 400px.
 */
export default function BackToTop() {
  const visible = useScrolled(400)

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  if (!visible) return null

  return (
    <button type="button" className="back-to-top" onClick={handleClick} aria-label={ui.backToTop}>
      <ArrowUp size={22} aria-hidden="true" />
    </button>
  )
}
