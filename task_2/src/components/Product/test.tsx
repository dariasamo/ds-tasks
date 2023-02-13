import { render, screen } from '@testing-library/react'

import Product from '.'
import ProductTitle from './ProductTitle'

describe('<ProductDescription />', () => {
  const props = {
    children: <ProductTitle>Title</ProductTitle>
  }

  const productTestId = 'product'
  const titleTestId = 'product-title'

  it('renders children', () => {
    render(<Product {...props} />)

    expect(screen.getByTestId(productTestId)).toBeInTheDocument()
    expect(screen.getByTestId(titleTestId)).toBeInTheDocument()
    expect(screen.getByTestId(titleTestId)).toHaveTextContent('Title')
  })
})
