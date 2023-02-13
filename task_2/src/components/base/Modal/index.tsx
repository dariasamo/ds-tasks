import ReactModal from 'react-modal'

type ModalProps = {
  isOpen: boolean
  children: React.ReactNode
  contentLabel?: string
  onCloseModal?: () => void
}

export default function Modal({
  children,
  isOpen,
  contentLabel,
  onCloseModal
}: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      content-label={contentLabel}
      overlayClassName="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-75 transition-opacity flex items-center justify-center"
      className="relative w-full max-w-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full"
    >
      {children}
      <button
        type="button"
        onClick={onCloseModal}
        className="absolute top-0 right-0 -mt-8 text-white"
      >
        Close Modal
      </button>
    </ReactModal>
  )
}
