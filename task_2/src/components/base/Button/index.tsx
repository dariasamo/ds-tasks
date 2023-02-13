import { classNames } from 'utils'

type Size = 'small' | 'medium' | 'large'

type ButtonProps = {
  size?: Size
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export const sizes: Record<Size, string> = {
  small: 'min-w-20 p-2 text-sm',
  medium: 'min-w-24 p-2 text-base',
  large: 'min-w-32 p-3 text-lg'
}

export default function Button({
  size = 'medium',
  children,
  className,
  onClick
}: ButtonProps) {
  return (
    <button
      className={classNames(
        'rounded bg-candy hover:bg-candy-dark focus:bg-candy-dark active:bg-candy-dark text-white shadow outline-candy-dark outline-offset-2',
        sizes[size],
        className
      )}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
