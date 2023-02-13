import { classNames } from 'utils'

type OffersSectionProps = {
  children: React.ReactNode
  className?: string
}

export default function OffersSection({
  children,
  className
}: OffersSectionProps) {
  return <div className={classNames('p-2 lg:p-4', className)}>{children}</div>
}
