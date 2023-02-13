import { render, screen } from '@testing-library/react'
import { sizes } from '.'

import ProductText from '.'

describe('<ProductText />', () => {
  const props = {
    children: 'Product Text'
  }

  const testId = 'product-text'

  it('should render the medium ProductText as default', () => {
    const { container } = render(<ProductText>Product Text</ProductText>)

    expect(screen.getByTestId(testId)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(sizes.medium)
    expect(container.firstChild).toHaveTextContent('Product Text')
  })

  it('should render the small ProductText', () => {
    const { container } = render(<ProductText size="small" {...props} />)

    expect(screen.getByTestId(testId)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(sizes.small)
  })

  it('should render the large ProductText', () => {
    const { container } = render(<ProductText size="large" {...props} />)

    expect(screen.getByTestId(testId)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(sizes.large)
  })

  it('should render the medium ProductText', () => {
    const { container } = render(<ProductText size="medium" {...props} />)

    expect(screen.getByTestId(testId)).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(sizes.medium)
  })
})
