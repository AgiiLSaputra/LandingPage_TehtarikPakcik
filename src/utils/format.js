/**
 * Pembantu format dan pembangun tautan.
 * Semua fungsi murni — tidak menyentuh storage, cookie, atau jaringan.
 */

/**
 * Format angka menjadi rupiah tanpa spasi: 8000 -> "Rp8.000".
 * @param {number|null|undefined} value
 * @returns {string} string kosong jika nilai tidak valid
 */
export function formatRupiah(value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return ''

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace(/\s/g, '')
}

/**
 * Bangun tautan wa.me. Mengembalikan null jika nomor belum diisi,
 * sehingga komponen bisa menonaktifkan tombol alih-alih membuat tautan rusak.
 * @param {string} number format 62xxxxxxxxxx
 * @param {string} message pesan bawaan
 * @returns {string|null}
 */
export function buildWhatsAppUrl(number, message = '') {
  const digits = String(number ?? '').replace(/\D/g, '')
  if (!digits) return null

  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${digits}${text}`
}

/**
 * @param {string} handle tanpa atau dengan tanda @
 * @returns {string|null}
 */
export function buildInstagramUrl(handle) {
  const clean = String(handle ?? '').trim().replace(/^@/, '')
  return clean ? `https://instagram.com/${clean}` : null
}

/**
 * @param {string} handle tanpa atau dengan tanda @
 * @returns {string|null}
 */
export function buildTikTokUrl(handle) {
  const clean = String(handle ?? '').trim().replace(/^@/, '')
  return clean ? `https://tiktok.com/@${clean}` : null
}

/**
 * @param {string|null} url
 * @returns {boolean} true untuk tautan luar
 */
export function isExternalUrl(url) {
  return typeof url === 'string' && /^https?:\/\//i.test(url)
}
