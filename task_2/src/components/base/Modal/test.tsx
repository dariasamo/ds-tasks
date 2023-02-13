import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Modal from '.'

describe('<Modal />', () => {
  const children = <div>Some children</div>
  const contentLabel = 'Offers'
  const onCloseModal = vi.fn()

  it('should render the modal with its children', () => {
    render(
      <Modal
        isOpen={true}
        contentLabel={contentLabel}
        onCloseModal={onCloseModal}
      >
        {children}
      </Modal>
    )

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Some children')).toBeInTheDocument()
  })

  it('should call the onCloseModal function when the close button is clicked', () => {
    render(
      <Modal
        isOpen={true}
        contentLabel={contentLabel}
        onCloseModal={onCloseModal}
      >
        {children}
      </Modal>
    )

    const closeButton = screen.getByText('Close Modal')
    closeButton.click()

    expect(onCloseModal).toHaveBeenCalledTimes(1)
  })

  it('should render the modal with the expected classes', () => {
    render(
      <Modal
        isOpen={true}
        contentLabel={contentLabel}
        onCloseModal={onCloseModal}
      >
        {children}
      </Modal>
    )

    const modal = screen.getByRole('dialog')

    expect(modal).toHaveClass(
      'relative w-full max-w-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full'
    )

    expect(modal.parentElement).toHaveClass(
      'fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-75 transition-opacity flex items-center justify-center'
    )
  })
})
