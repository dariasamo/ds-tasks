type OffersHeadingProps = {
  children: React.ReactNode
}

export default function OffersHeading({ children }: OffersHeadingProps) {
  return (
    <div className="p-4">
      <h1 className="m-auto max-w-md text-center text-lg lg:text-xl">
        {children}
      </h1>
    </div>
  )
}
