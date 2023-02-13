import { render, screen } from '@testing-library/react'
import { sizes } from '.'
import ProductImage from '.'

describe('<ProductImage />', () => {
  const props = {
    src: './image.jpg',
    alt: 'Alt Text'
  }

  it('should render medium image by default', () => {
    const { container } = render(<ProductImage {...props} />)

    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(screen.getByRole('img')).toHaveAccessibleName()

    expect(container.firstChild).toHaveClass(sizes.medium)
  })
})
