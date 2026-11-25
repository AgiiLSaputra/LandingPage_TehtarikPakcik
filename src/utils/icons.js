import {
  Clock,
  Coffee,
  CupSoda,
  Instagram,
  MapPin,
  MessageCircle,
  MoonStar,
  Music2,
  Sparkles,
  UtensilsCrossed,
  Wallet,
} from 'lucide-react'

/**
 * Nama ikon (dari content.js) -> komponen lucide-react.
 * Ikon yang tidak dikenal jatuh ke `Coffee`.
 */
export const icons = {
  Clock,
  Coffee,
  CupSoda,
  Instagram,
  MapPin,
  MessageCircle,
  MoonStar,
  Music2,
  Sparkles,
  UtensilsCrossed,
  Wallet,
}

/** @param {string} name */
export function getIcon(name) {
  return icons[name] ?? Coffee
}
