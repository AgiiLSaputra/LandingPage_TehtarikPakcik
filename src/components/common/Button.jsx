import { useId } from 'react'
import { isExternalUrl } from '../../utils/format'
import './Button.css'

/**
 * Tombol pil bergaya "hard shadow".
 *
 * - `href` diisi  -> dirender sebagai <a>
 * - `href` kosong -> dirender sebagai <button>
 * - `disabled`    -> dirender sebagai <button disabled> dengan tooltip
 *
 * @param {'primary'|'secondary'|'whatsapp'|'ghost'} variant
 */
export default function Button({
  variant = 'primary',
  href,
  children,
  icon,
  iconAfter,
  className = '',
  disabled = false,
  disabledReason,
  size = 'md',
  ...rest
}) {
  const classes = ['btn', `btn--${variant}`, `btn--${size}`, className].filter(Boolean).join(' ')
  const hintId = useId()

  const content = (
    <>
      {icon && (
        <span className="btn__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="btn__label">{children}</span>
      {iconAfter && (
        <span className="btn__icon" aria-hidden="true">
          {iconAfter}
        </span>
      )}
    </>
  )

  if (href && !disabled) {
    const external = isExternalUrl(href)

    return (
      <a
        className={classes}
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      title={disabled && disabledReason ? disabledReason : undefined}
      aria-describedby={disabled && disabledReason ? hintId : undefined}
      {...rest}
    >
      {content}
      {disabled && disabledReason && (
        <span id={hintId} className="sr-only">
          {disabledReason}
        </span>
      )}
    </button>
  )
}
