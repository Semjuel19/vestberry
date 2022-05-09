import {useState} from 'react'
import Modal from 'styled-react-modal'
import {SButton} from '@client/components/styles/Button.styled'
import {
  SModalWrapper, SModalHeader, SModalCloseIcon, SModalBody,
} from '@client/components/styles/Modal.styled'
import close from '@assets/close.svg'
import AddForm from '@client/components/AddForm'

const StyledModal = Modal.styled`
  width: 640px;
  display: block;
  background-color: #141518;
  border-radius: 15px;
`

export default function FancyModalButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <SModalWrapper>
        <SButton onClick={toggleModal}>Add new company</SButton>
      </SModalWrapper>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <SModalHeader>
          <div>
            <h2>Add new company</h2>
            <p>
              Add new company by filling all required fields, select from lists and be
              careful, because integer is limited and not everyone can handle that.
            </p>
          </div>
          <SModalCloseIcon src={close} onClick={toggleModal} />
        </SModalHeader>
        <SModalBody>
          <AddForm onClose={toggleModal} />
        </SModalBody>
      </StyledModal>
    </div>
  )
}
