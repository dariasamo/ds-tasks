import type { Size } from 'types'
import { classNames } from 'utils'

type ProductImageProps = {
  src: string
  alt: string
  size?: Size
}

export const sizes: Record<Size, string> = {
  small: 'h-16 w-auto mr-4',
  medium: 'w-2/5 mr-6',
  large: 'w-1/2 mr-8'
}

export default function ProductImage({
  src,
  alt,
  size = 'medium'
}: ProductImageProps) {
  return (
    <img src={src} alt={alt} className={classNames('block', sizes[size])} />
  )
}
