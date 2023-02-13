import React from 'react'
type ProductProps = {
  children: React.ReactNode
}

export default function Product({ children }: ProductProps) {
  return (
    <div className="flex w-full items-center" data-testid="product">
      {children}
    </div>
  )
}
