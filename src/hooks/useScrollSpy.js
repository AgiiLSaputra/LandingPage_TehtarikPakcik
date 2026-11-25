import { useEffect, useRef, useState } from 'react'

/**
 * Mengembalikan id section yang sedang terlihat, untuk menandai tautan
 * navbar yang aktif.
 *
 * @param {string[]} ids daftar id section, berurutan dari atas
 * @param {number} offset jarak aman dari navbar (px)
 * @returns {string}
 */
export function useScrollSpy(ids, offset = 96) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')
  const idsRef = useRef(ids)

  idsRef.current = ids

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const list = idsRef.current
      let current = list[0] ?? ''

      for (const id of list) {
        const element = document.getElementById(id)
        if (!element) continue

        const { top } = element.getBoundingClientRect()
        if (top - offset <= 0) current = id
      }

      setActiveId(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [offset])

  return activeId
}
