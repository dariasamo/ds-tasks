import { classNames } from 'utils'
import { Size } from 'types'

type ProductTextProps = {
  size?: Size
  children: React.ReactNode
}

export const sizes: Record<Size, string> = {
  small: 'text-xs lg:text-sm',
  medium: 'text-sm lg:text-base',
  large: 'text-base lg:text-lg'
}

export default function ProductText({
  size = 'medium',
  children
}: ProductTextProps) {
  return (
    <span
      className={classNames('font-sans', sizes[size])}
      data-testid="product-text"
    >
      {children}
    </span>
  )
}
