import { render, screen } from '@testing-library/react'

import ProductDescription from '.'
import ProductTitle from '../ProductTitle'

describe('<ProductDescription />', () => {
  const props = {
    children: <ProductTitle>Title</ProductTitle>
  }

  const descriptionTestId = 'product-description'
  const titleTestId = 'product-title'

  it('renders children', () => {
    render(<ProductDescription {...props} />)

    expect(screen.getByTestId(descriptionTestId)).toBeInTheDocument()
    expect(screen.getByTestId(titleTestId)).toBeInTheDocument()
    expect(screen.getByTestId(titleTestId)).toHaveTextContent('Title')
  })
})
