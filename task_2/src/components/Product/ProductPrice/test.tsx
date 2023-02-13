import { render, screen } from '@testing-library/react'
import { sizes } from '.'
import ProductPrice from '.'

describe('<ProductPrice />', () => {
  const props = {
    currency: 'USD',
    originalPrice: 9.45
  }

  const containterTestId = 'price-container'
  const originalTestId = 'original-price'
  const discountedTestId = 'discounted-price'

  it('should render the medium ProductPrice as default', () => {
    const { container } = render(<ProductPrice {...props} />)

    expect(screen.getByTestId(containterTestId)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(sizes.medium)
  })

  it('should render the small ProductPrice', () => {
    const { container } = render(<ProductPrice size="small" {...props} />)

    expect(screen.getByTestId(containterTestId)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(sizes.small)
  })

  it('should render the large ProductPrice', () => {
    const { container } = render(<ProductPrice size="large" {...props} />)

    expect(screen.getByTestId(containterTestId)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(sizes.large)
  })

  it('should render the medium ProductPrice', () => {
    const { container } = render(<ProductPrice size="medium" {...props} />)

    expect(screen.getByTestId(containterTestId)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(sizes.medium)
  })

  it('should render original price', () => {
    render(<ProductPrice {...props} />)

    expect(screen.getByTestId(originalTestId)).toHaveTextContent('9.45')
  })

  it('should render discounted price and crossed out original price', () => {
    render(<ProductPrice discountedPrice={7.45} {...props} />)

    expect(screen.getByTestId(discountedTestId)).toHaveTextContent('7.45')
    expect(screen.getByTestId(originalTestId)).toHaveClass('line-through')
  })
})
