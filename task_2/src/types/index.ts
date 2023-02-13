export type Size = 'small' | 'medium' | 'large'

export type SingleProduct = {
  id: number
  title: string
  short_description: string
  original_price: number
  discounted_price: number | null
  image: string
}

export type SingleProductData = {
  currency: string
  data: SingleProduct[]
}

export type Offers = {
  currency: string
  offers: SingleProduct[]
}
