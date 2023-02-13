import type { Size } from 'types'

type ProductPriceProps = {
  currency: string
  originalPrice: number
  discountedPrice?: number | null
  size?: Size
  spacing?: string
}

export const sizes: Record<Size, string> = {
  small: 'text-xs lg:text-sm',
  medium: 'text-sm lg:text-base',
  large: 'text-base lg:text-lg'
}

export default function ProductPrice({
  size = 'medium',
  currency,
  originalPrice,
  discountedPrice
}: ProductPriceProps) {
  return (
    <div className={sizes[size]} data-testid="price-container">
      <span
        className={discountedPrice ? 'text-gray-400 line-through' : 'font-bold'}
        data-testid="original-price"
      >
        {currency + ' ' + originalPrice}
      </span>
      {discountedPrice && (
        <span className="ml-2 font-bold" data-testid="discounted-price">
          {currency + ' ' + discountedPrice}
        </span>
      )}
    </div>
  )
}
