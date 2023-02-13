import { classNames } from 'utils'
import type { Size } from 'types'

type ProductTitleProps = {
  size?: Size
  children: React.ReactNode
}

export const sizes: Record<Size, string> = {
  small: 'text-sm lg:text-base',
  medium: 'text-base lg:text-lg',
  large: 'text-lg lg:text-xl'
}

export default function ProductTitle({
  size = 'medium',
  children
}: ProductTitleProps) {
  return (
    <span
      className={classNames('font-serif font-bold', sizes[size])}
      data-testid="product-title"
    >
      {children}
    </span>
  )
}
