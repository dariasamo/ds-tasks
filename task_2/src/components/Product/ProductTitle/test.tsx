import { render, screen } from '@testing-library/react'
import { sizes } from '.'
import ProductTitle from '.'

describe('<ProductTitle />', () => {
  const props = {
    children: 'Product title'
  }

  const testId = 'product-title'

  it('should render the medium ProductTitle as default', () => {
    const { container } = render(<ProductTitle>Product Title</ProductTitle>)

    expect(screen.getByTestId(testId)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(sizes.medium)
    expect(container.firstChild).toHaveTextContent('Product Title')
  })

  it('should render the small ProductTitle', () => {
    const { container } = render(<ProductTitle size="small" {...props} />)

    expect(screen.getByTestId(testId)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(sizes.small)
  })

  it('should render the large ProductTitle', () => {
    const { container } = render(<ProductTitle size="large" {...props} />)

    expect(screen.getByTestId(testId)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(sizes.large)
  })

  it('should render the medium ProductTitle', () => {
    const { container } = render(<ProductTitle size="medium" {...props} />)

    expect(screen.getByTestId(testId)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(sizes.medium)
  })
})
