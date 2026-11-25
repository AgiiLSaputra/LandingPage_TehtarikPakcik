import { CupSoda } from 'lucide-react'
import { ui } from '../../data/content'
import { formatRupiah } from '../../utils/format'
import './MenuCard.css'

/**
 * Kartu menu: gambar (opsional), nama, deskripsi singkat, dan harga.
 * Menu tanpa foto memakai panel dekoratif agar grid tetap rapi.
 */
export default function MenuCard({ item }) {
  const price = formatRupiah(item.price)

  return (
    <article className="menu-card">
      <div className="menu-card__media">
        {item.image ? (
          <img
            className="menu-card__image"
            src={item.image}
            alt={item.imageAlt}
            width="800"
            height="600"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={`menu-card__placeholder menu-card__placeholder--${item.tone ?? 'default'}`}>
            <span className="menu-card__cup" aria-hidden="true">
              <CupSoda size={34} strokeWidth={1.5} />
            </span>
          </div>
        )}
      </div>

      <div className="menu-card__body">
        <div className="menu-card__head">
          <h3 className="menu-card__name">{item.name}</h3>
          {price ? (
            <p className="menu-card__price">{price}</p>
          ) : (
            <p className="menu-card__price menu-card__price--pending">{ui.priceFallback}</p>
          )}
        </div>
        <p className="menu-card__desc">{item.description}</p>
      </div>
    </article>
  )
}
