import { render, screen } from '@testing-library/react'
import { sizes } from '.'
import Button from '.'

describe('<Button />', () => {
  const props = {
    children: 'Click me'
  }

  it('should render the medium button as default', () => {
    const { container } = render(<Button>Click me</Button>)

    expect(screen.getByRole('button')).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(sizes.medium)
    expect(container.firstChild).toHaveTextContent('Click me')
  })

  it('should render the small button', () => {
    const { container } = render(<Button size="small" {...props} />)

    expect(screen.getByRole('button')).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(sizes.small)
  })

  it('should render the large button', () => {
    const { container } = render(<Button size="large" {...props} />)

    expect(screen.getByRole('button')).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(sizes.large)
  })

  it('should render the medium button', () => {
    const { container } = render(<Button size="medium" {...props} />)

    expect(screen.getByRole('button')).toBeInTheDocument()

    expect(container.firstChild).toHaveClass(sizes.medium)
  })
})
