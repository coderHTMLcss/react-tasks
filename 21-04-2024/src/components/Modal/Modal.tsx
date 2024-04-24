import { SyntheticEvent } from 'react'
import ModalWrapper from "./StyledModal";

interface IModalProps {
    handleClose: () => void;
}


const Modal: React.FC<IModalProps> = ({ handleClose }) => {
    //vscode-styled-components
    const handleCloseModal = (synteticEvent: SyntheticEvent) => {
        if (synteticEvent.target === synteticEvent.currentTarget) {
            //change state of a parent component
            handleClose()
        }
    }
    return (
        <ModalWrapper onClick={handleCloseModal}>
            <div className="modal">
                <p className="modal__content">I am Modal Window</p>
            </div>
        </ModalWrapper>
    )
};

export default Modal