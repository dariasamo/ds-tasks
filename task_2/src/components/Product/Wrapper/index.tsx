type WrapperProps = {
  children: React.ReactNode
  isLoading: boolean
}

export default function Wrapper({ children, isLoading = false }: WrapperProps) {
  return (
    <div data-testid="wrapper">
      {isLoading ? (
        <div className="bg-sand fixed flex h-full w-full items-center justify-center">
          Loading...
        </div>
      ) : (
        <div className="bg-sand flex min-h-screen items-center sm:py-10 lg:py-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
