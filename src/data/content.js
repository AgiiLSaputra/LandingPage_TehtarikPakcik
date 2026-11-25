/**
 * Satu sumber kebenaran untuk seluruh teks, menu, dan tautan.
 *
 * ATURAN:
 * - Komponen tidak boleh menulis teks toko/menu/tautan secara langsung.
 * - Nilai yang masih kosong ditandai "ISI:" dan wajib diisi pemilik toko.
 * - Harga hanya diisi jika benar-benar diketahui (lihat sumber di komentar).
 *   Harga `null` akan menyembunyikan label harga pada kartu menu.
 */

import logoSource from '../assets/images/logo.webp'
import heroImage from '../assets/images/hero-bg.webp'
import aboutImage from '../assets/images/tempat.webp'
import galleryGerobakMalam from '../assets/images/gerobak-malam.webp'
import galleryPoster from '../assets/images/poster-menu.webp'
import galleryNasiGoreng from '../assets/images/nasi-goreng.webp'
import galleryMartabak from '../assets/images/martabak-telur.webp'
import galleryAyam from '../assets/images/ayam-black-pepper.webp'
import menuNasiLemak from '../assets/images/nasi-lemak.webp'
import menuNasiGorengKampung from '../assets/images/nasi-goreng-kampung.webp'
import menuAyamBlackPepper from '../assets/images/ayam-black-pepper.webp'
import menuMartabakTelur from '../assets/images/martabak-telur.webp'

export const logo = logoSource

/* --------------------------------------------------------------------------
   4.1 Informasi toko
   -------------------------------------------------------------------------- */

export const shop = {
  name: 'Teh Tarik Pak Cik',
  tagline: 'Ditarik sampai berbusa, diseruput sampai puas',
  location: 'Kandis, Riau', // dari desain header; lengkapi dengan alamat lengkap di bawah
  address: '', // ISI: alamat lengkap gerobak
  openHours: '', // ISI: contoh "Setiap hari, 16.00 – 23.00"
  whatsapp: '', // ISI: format 62xxxxxxxxxx tanpa tanda +
  mapsUrl: '', // ISI: tautan Google Maps
  socials: {
    instagram: 'tehtarik_pakcik', // terbaca pada banner gerobak; koreksi jika salah
    tiktok: '', // ISI: opsional
  },
}

/* --------------------------------------------------------------------------
   Label antarmuka (bukan konten toko)
   -------------------------------------------------------------------------- */

export const ui = {
  skipToContent: 'Lewati ke konten utama',
  navLabel: 'Navigasi utama',
  footerNavLabel: 'Navigasi footer',
  brandHomeLabel: 'Teh Tarik Pak Cik — kembali ke bagian atas',
  openMenuLabel: 'Buka menu navigasi',
  closeMenuLabel: 'Tutup menu navigasi',
  mobileMenuLabel: 'Menu navigasi seluler',
  backToTop: 'Kembali ke atas',
  aboutImageAlt: 'Area duduk pelanggan di sekitar gerobak Teh Tarik Pak Cik',
  whatsappMessage: 'Halo Teh Tarik Pak Cik, saya mau pesan.',
  whatsappCta: 'Pesan via WhatsApp',
  whatsappUnavailable: 'Nomor WhatsApp belum diisi di src/data/content.js',
  mapsCta: 'Buka di Google Maps',
  mapsUnavailable: 'Tautan Google Maps belum diisi di src/data/content.js',
  placeholder: 'Belum diisi',
  priceFallback: 'Harga menyusul',
  labels: {
    address: 'Alamat',
    openHours: 'Jam buka',
  },
  socials: {
    instagram: 'Instagram',
    tiktok: 'TikTok',
  },
  footerRights: 'Semua hak dilindungi.',
}

/* --------------------------------------------------------------------------
   Navigasi (3)
   -------------------------------------------------------------------------- */

export const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Menu', href: '#menu' },
  { label: 'Lokasi', href: '#lokasi' },
  { label: 'Kontak', href: '#kontak' },
]

/* --------------------------------------------------------------------------
   Hero
   -------------------------------------------------------------------------- */

export const hero = {
  badge: shop.location ? `${shop.name} · ${shop.location}` : shop.name,
  titleLead: 'Seduhan',
  titleAccent: 'teh tarik',
  titleRest: 'khas Malaysia, langsung dari gerobak.',
  subtitle:
    'Teh tarik hangat dan dingin, diseduh saat dipesan, ditemani nasi dan camilan gorengan. Pas untuk teman santai dan ngobrol.',
  primaryCta: 'Lihat Menu',
  secondaryCta: 'Pesan via WhatsApp',
  stats: [
    { id: 'st1', value: '8', label: 'menu pilihan' }, // sesuai jumlah item menu di bawah
    { id: 'st2', value: 'Rp5.000', label: 'mulai dari' }, // harga terendah yang diketahui
    { id: 'st3', value: 'Fresh', label: 'dibuat dadakan' },
  ],
  highlights: [
    {
      id: 'hl1',
      icon: 'CupSoda',
      title: 'Teh Tarik',
      meta: 'Signature · Rp7.000',
    },
    {
      id: 'hl2',
      icon: 'Clock',
      title: shop.openHours || 'Buka sampai malam',
      meta: 'Pesan di tempat atau bungkus',
    },
  ],
  image: heroImage,
}

/* --------------------------------------------------------------------------
   Tentang
   -------------------------------------------------------------------------- */

export const about = {
  eyebrow: 'Tentang',
  title: 'Kenalan dengan gerobak kami',
  story:
    'Teh Tarik Pak Cik adalah gerobak teh tarik dengan menu minuman khas Malaysia dan makanan pendamping seperti nasi lemak, nasi goreng, dan martabak. Gerobak buka sampai malam, jadi bisa mampir kapan saja saat ingin ngobrol santai.',
  image: aboutImage,
  imageAlt: ui.aboutImageAlt,
  points: [
    { id: 'a1', icon: 'Wallet', text: 'Harga bersahabat, camilan mulai Rp5.000' },
    { id: 'a2', icon: 'UtensilsCrossed', text: 'Ada makanan pendamping, bukan hanya minuman' },
    { id: 'a3', icon: 'MoonStar', text: 'Buka sampai malam' },
  ],
}

/* --------------------------------------------------------------------------
   Menu unggulan
   Harga bersumber dari papan menu / banner gerobak. Yang belum diketahui
   dibiarkan null agar tidak dikarang.
   -------------------------------------------------------------------------- */

export const menuSection = {
  eyebrow: 'Menu',
  title: 'Menu unggulan',
  subtitle: 'Minuman dan makanan yang tersedia di gerobak kami.',
  items: [
    {
      id: 'm1',
      name: 'Teh Tarik Malay',
      description: 'Teh susu khas Malaysia, diseduh lalu ditarik sampai berbusa.',
      price: 7000, // banner gerobak: 7k
      image: null,
      imageAlt: '',
      tone: 'teh',
    },
    {
      id: 'm2',
      name: 'Kopi Ais Malay',
      description: 'Kopi susu dingin dengan es batu.',
      price: 7000, // banner gerobak: 7k
      image: null,
      imageAlt: '',
      tone: 'kopi',
    },
    {
      id: 'm3',
      name: 'Milo Ais Malay',
      description: 'Minuman Milo dingin dengan es batu.',
      price: 10000, // papan menu: 10k
      image: null,
      imageAlt: '',
      tone: 'milo',
    },
    {
      id: 'm4',
      name: 'Tela-Tela',
      description: 'Singkong goreng dengan bumbu tabur, camilan pendamping.',
      price: 5000, // banner gerobak: 5k
      image: null,
      imageAlt: '',
      tone: 'tela',
    },
    {
      id: 'm5',
      name: 'Nasi Lemak Malay',
      description: 'Nasi lemak dengan sambal, telur, kacang, ikan teri, dan timun.',
      price: null, // ISI: harga nasi lemak
      image: menuNasiLemak,
      imageAlt: 'Nasi lemak dengan sambal, telur, kacang, ikan teri, dan timun',
    },
    {
      id: 'm6',
      name: 'Nasi Goreng Kampung',
      description: 'Nasi goreng kampung dengan telur mata sapi, kerupuk, dan timun.',
      price: null, // ISI: harga nasi goreng kampung
      image: menuNasiGorengKampung,
      imageAlt: 'Nasi goreng kampung dengan telur mata sapi, kerupuk, dan timun',
    },
    {
      id: 'm7',
      name: 'Nasi Ayam Black Pepper',
      description: 'Nasi putih dengan ayam saus lada hitam dan irisan timun.',
      price: null, // ISI: harga nasi ayam black pepper
      image: menuAyamBlackPepper,
      imageAlt: 'Nasi putih dengan ayam saus lada hitam dan irisan timun',
    },
    {
      id: 'm8',
      name: 'Martabak Telur',
      description: 'Martabak telur goreng, disajikan dengan bumbu tabur.',
      price: null, // ISI: harga martabak telur
      image: menuMartabakTelur,
      imageAlt: 'Martabak telur goreng dengan bumbu tabur di atas piring',
    },
  ],
}

/* --------------------------------------------------------------------------
   Keunggulan
   -------------------------------------------------------------------------- */

export const featuresSection = {
  eyebrow: 'Kenapa mampir',
  title: 'Alasan mampir ke gerobak kami',
  subtitle: 'Yang membuat orang datang lagi.',
  items: [
    {
      id: 'f1',
      icon: 'Wallet',
      title: 'Harga bersahabat',
      description: 'Camilan mulai Rp5.000 dan minuman mulai Rp7.000.',
    },
    {
      id: 'f2',
      icon: 'MoonStar',
      title: 'Buka sampai malam',
      description: 'Pas untuk nongkrong santai setelah matahari terbenam.',
    },
    {
      id: 'f3',
      icon: 'UtensilsCrossed',
      title: 'Ada makanan pendamping',
      description: 'Nasi lemak, nasi goreng, nasi ayam, dan martabak telur.',
    },
    {
      id: 'f4',
      icon: 'MessageCircle',
      title: 'Pesan lewat WhatsApp',
      description: 'Satu klik untuk memesan atau bertanya langsung.',
    },
  ],
}

/* --------------------------------------------------------------------------
   Galeri
   -------------------------------------------------------------------------- */

export const gallerySection = {
  eyebrow: 'Galeri',
  title: 'Suasana dan sajian',
  subtitle: 'Foto asli dari gerobak Teh Tarik Pak Cik.',
  items: [
    {
      id: 'g1',
      src: galleryGerobakMalam,
      alt: 'Bagian belakang gerobak Teh Tarik Pak Cik pada malam hari',
    },
    {
      id: 'g2',
      src: galleryPoster,
      alt: 'Papan menu Teh Tarik Pak Cik yang menampilkan teh tarik, kopi ais, milo ais, dan nasi lemak',
    },
    {
      id: 'g3',
      src: galleryMartabak,
      alt: 'Martabak telur goreng di atas piring putih',
    },
    {
      id: 'g4',
      src: galleryNasiGoreng,
      alt: 'Nasi goreng dengan telur mata sapi, kerupuk, dan irisan tomat',
    },
    {
      id: 'g5',
      src: galleryAyam,
      alt: 'Nasi dengan ayam saus lada hitam di mangkuk bermotif hijau',
    },
    {
      id: 'g6',
      src: aboutImage,
      alt: 'Area duduk pelanggan dengan tikar biru di depan gerobak',
    },
  ],
}

/* --------------------------------------------------------------------------
   Testimoni — hanya testimoni asli. Kosongkan array untuk menyembunyikan
   section ini sepenuhnya (PRD AC-09).
   -------------------------------------------------------------------------- */

export const testimonialsSection = {
  eyebrow: 'Testimoni',
  title: 'Kata pelanggan',
  subtitle: '',
  items: [
    // { id: 't1', name: '', text: '' },
  ],
}

/* --------------------------------------------------------------------------
   Lokasi
   -------------------------------------------------------------------------- */

export const locationSection = {
  eyebrow: 'Lokasi',
  title: 'Mampir ke gerobak',
  subtitle: 'Datang langsung atau buka rute lewat Google Maps.',
}

/* --------------------------------------------------------------------------
   Kontak
   -------------------------------------------------------------------------- */

export const contactSection = {
  eyebrow: 'Kontak',
  title: 'Mau pesan atau tanya-tanya?',
  subtitle: 'Chat kami di WhatsApp, kami balas secepatnya.',
  ctaLabel: 'Pesan via WhatsApp',
  socialLabel: 'Ikuti kami',
}

/* --------------------------------------------------------------------------
   Footer
   -------------------------------------------------------------------------- */

export const footer = {
  tagline: shop.tagline,
}
