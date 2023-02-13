import { render, screen } from '@testing-library/react'
import OffersHeading from '.'

describe('<OffersHeading />', () => {
  it('should render the heading with the provided children', () => {
    const headingText = 'Some heading text'
    render(<OffersHeading>{headingText}</OffersHeading>)

    const headingElement = screen.getByText(headingText)
    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toHaveClass(
      'm-auto max-w-md text-center text-lg lg:text-xl'
    )
  })
})
