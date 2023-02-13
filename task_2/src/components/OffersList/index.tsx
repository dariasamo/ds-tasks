import { useState } from 'react'
import Button from '../base/Button'
import ProductImage from '../Product/ProductImage'
import Product from '../Product'
import ProductDescription from '../Product/ProductDescription'
import ProductPrice from '../Product/ProductPrice'
import ProductText from '../Product/ProductText'
import ProductTitle from '../Product/ProductTitle'
import OffersHeading from 'components/OffersHeading'
import OffersSection from 'components/OffersSection'

import type { SingleProduct, Offers } from 'types'

type OfferListProps = {
  product: SingleProduct
  currency: string
  data: Offers
}

export default function OffersList({
  product,
  currency,
  data
}: OfferListProps) {
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  function isInSelectedIds(id: number): boolean {
    return selectedIds.includes(id)
  }

  function addOrRemoveProductId(id: number): void {
    setSelectedIds((selectedIds) => {
      if (isInSelectedIds(id)) {
        return selectedIds.filter((selectedId) => selectedId !== id)
      }
      return [...selectedIds, id]
    })
  }

  function displaySelectedProductIds(): void {
    const idsAsString = selectedIds.toString()
    const stringToDisplay = idsAsString.length
      ? idsAsString
      : 'No offers selected'
    alert(stringToDisplay)
  }

  return (
    <>
      <OffersHeading>Get extras for your product</OffersHeading>
      <OffersSection className="bg-slate-100">
        <Product>
          <ProductImage
            src={product?.image}
            alt={product?.title}
            size="small"
          />
          <ProductDescription size="small">
            <ProductTitle size="small">{product?.title}</ProductTitle>
            <ProductPrice
              size="small"
              currency={currency}
              originalPrice={product?.original_price}
              discountedPrice={product?.discounted_price}
            />
          </ProductDescription>
        </Product>
      </OffersSection>
      <OffersSection>
        {data.offers.map((offer) => (
          <div className="py-2" key={offer.id}>
            <Product>
              <ProductImage
                src={offer?.image}
                alt={offer?.title}
                size="small"
              />
              <ProductDescription size="small">
                <ProductTitle size="small">{offer?.title}</ProductTitle>
                <ProductPrice
                  size="small"
                  currency={data.currency}
                  originalPrice={offer?.original_price}
                  discountedPrice={offer?.discounted_price}
                />
                <ProductText size="small">
                  {offer?.short_description}
                </ProductText>
              </ProductDescription>
              <Button
                size="small"
                onClick={() => addOrRemoveProductId(offer?.id)}
              >
                {isInSelectedIds(offer?.id) ? '- Remove' : '+ Add'}
              </Button>
            </Product>
          </div>
        ))}
      </OffersSection>
      <OffersSection className="flex justify-end bg-slate-100">
        <Button size="large" onClick={displaySelectedProductIds}>
          Go to Checkout
        </Button>
      </OffersSection>
    </>
  )
}
