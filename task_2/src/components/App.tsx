import { useState, useEffect } from 'react'
import Button from './base/Button'
import ProductImage from './Product/ProductImage'
import Product from './Product'
import ProductDescription from './Product/ProductDescription'
import ProductPrice from './Product/ProductPrice'
import ProductText from './Product/ProductText'
import ProductTitle from './Product/ProductTitle'
import Wrapper from './Product/Wrapper'
import OffersList from './OffersList'
import Modal from 'components/base/Modal'
import { APP_ENDPOINTS } from '../constants'

import { fetchData } from 'api'
import type { SingleProductData, Offers } from 'types'

function App() {
  const [
    {
      currency,
      data: [product]
    },
    setData
  ] = useState<SingleProductData>({ currency: '', data: [] })
  const [offersData, setOffersData] = useState<Offers>({
    currency: '',
    offers: []
  })

  const [isModalOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // mock API call to single product endpoint
  useEffect(() => {
    setIsLoading(true)
    fetchData(APP_ENDPOINTS.SINGLE_PRODUCT)
      .then((data) => setData(data as SingleProductData))
      .finally(() => setIsLoading(false))
  }, [])

  function openModal(): void {
    setIsOpen(true)
  }

  function closeModal(): void {
    setIsOpen(false)
  }

  // fetch offers on demand
  async function fetchOffers(): Promise<void> {
    const data = await fetchData(APP_ENDPOINTS.OFFERS)
    setOffersData(data as Offers)
  }

  async function handleOffersModal(): Promise<void> {
    await fetchOffers()
    openModal()
  }

  return (
    <Wrapper isLoading={isLoading}>
      <Product>
        <ProductImage src={product?.image} alt={product?.title} size="medium" />
        <ProductDescription>
          <ProductTitle size="large">{product?.title}</ProductTitle>
          <ProductPrice
            size="large"
            currency={currency}
            originalPrice={product?.original_price}
            discountedPrice={product?.discounted_price}
          />
          <ProductText size="large">{product?.short_description}</ProductText>
          <Button size="large" onClick={handleOffersModal}>
            Buy
          </Button>
        </ProductDescription>
      </Product>

      <Modal
        isOpen={isModalOpen}
        onCloseModal={closeModal}
        contentLabel="Offers"
      >
        <OffersList product={product} currency={currency} data={offersData} />
      </Modal>
    </Wrapper>
  )
}

export default App
