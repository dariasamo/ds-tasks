import React from 'react'
import type { Size } from 'types'

type ProductDescriptionProps = {
  children: React.ReactNode
  size?: Size
}

const spacings: Record<Size, string> = {
  small: 'mt-2',
  medium: 'mt-3',
  large: 'mt-4'
}

export default function ProductDescription({
  children,
  size = 'medium'
}: ProductDescriptionProps) {
  return (
    <div className="mr-auto" data-testid="product-description">
      {React.Children.map(children, (child, index) => {
        return (
          <div className={`${index > 0 ? spacings[size] : ''}`}>{child}</div>
        )
      })}
    </div>
  )
}
