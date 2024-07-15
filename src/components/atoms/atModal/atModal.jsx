
import styled from 'styled-components';

function AtModal({handleClose,show,children}) {
    return(
        <ModalDiv block={show ? 'block' : 'none'} >
            <ContentDiv>
                {children}
                <button onClick={handleClose}>close</button>
            </ContentDiv>

        </ModalDiv>
        
    )
}



const ModalDiv = styled.div`
    display: $(p=> p.block && p.black)
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
`


const ContentDiv = styled.div`
    positin: fixed;
    background:white;
    width: 50%;
    heigth: auto;
    top: 160px;
    left: 50%;
    padding: 2rem;
    transform: translate(-50%, -50%);
`
export default AtModal;