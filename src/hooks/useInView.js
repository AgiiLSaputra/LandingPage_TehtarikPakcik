import { useEffect, useState } from 'react'

/**
 * Menandai elemen sudah masuk viewport. Dipakai komponen `Reveal`.
 * Animasi hanya berjalan sekali (PRD 6).
 *
 * @param {import('react').RefObject<Element>} ref
 * @returns {boolean}
 */
export function useInView(ref, { threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    // Tanpa IntersectionObserver, tampilkan konten apa adanya.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, threshold, rootMargin])

  return inView
}
