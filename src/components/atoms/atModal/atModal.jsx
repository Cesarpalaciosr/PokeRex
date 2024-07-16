
import styled from 'styled-components';

function AtModal({handleClose, children}) {
    return(
        <Modal>
            <ModalContent>
                {children}
                <button onClick={handleClose}>close</button>
            </ModalContent>

        </Modal>
            )
}


// Styled Components
const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
export default AtModal;