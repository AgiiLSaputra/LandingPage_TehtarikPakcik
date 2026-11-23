/**
 * Pembatas lebar maksimum + padding samping.
 * Gaya `.container` ada di `src/styles/global.css`.
 */
export default function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  const classes = className ? `container ${className}` : 'container'

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  )
}
