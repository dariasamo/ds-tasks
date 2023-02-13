import { render, cleanup, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import OffersList from '.'
import { SingleProduct, Offers } from 'types'

afterEach(cleanup)

const product: SingleProduct = {
  id: 1,
  short_description: 'Lorem Ipsum',
  title: 'Test Product',
  image: 'test.jpg',
  original_price: 10,
  discounted_price: 8
}

const data: Offers = {
  currency: 'USD',
  offers: [
    {
      id: 1,
      title: 'Test Offer 1',
      image: 'offer1.jpg',
      original_price: 2,
      discounted_price: 1,
      short_description: 'Offer 1 short description'
    }
  ]
}

describe('OffersList', () => {
  it('renders the component with offers', () => {
    const { getByText, getByAltText } = render(
      <OffersList product={product} currency={data.currency} data={data} />
    )

    expect(getByText('Get extras for your product')).toBeInTheDocument()
    expect(getByAltText(product.title)).toBeInTheDocument()
    expect(getByText(product.title)).toBeInTheDocument()
    expect(
      getByText(`${data.currency} ${product.discounted_price}`)
    ).toBeInTheDocument()
    expect(getByText(data.offers[0].title)).toBeInTheDocument()
    expect(getByAltText(data.offers[0].title)).toBeInTheDocument()
    expect(
      getByText(`${data.currency} ${data.offers[0].discounted_price}`)
    ).toBeInTheDocument()
    expect(getByText(data.offers[0].short_description)).toBeInTheDocument()
    expect(getByText('+ Add')).toBeInTheDocument()
    expect(getByText('Go to Checkout')).toBeInTheDocument()
  })

  test('displaySelectedProductIds function displays selected ids', () => {
    vi.spyOn(window, 'alert').mockImplementation(() => vi.fn())

    const { getByText } = render(
      <OffersList product={product} currency="USD" data={data} />
    )

    const addOffer1Button = getByText('+ Add')
    fireEvent.click(addOffer1Button)

    const goToCheckoutButton = getByText('Go to Checkout')
    fireEvent.click(goToCheckoutButton)

    expect(window.alert).toHaveBeenCalledWith('1')
  })
})
