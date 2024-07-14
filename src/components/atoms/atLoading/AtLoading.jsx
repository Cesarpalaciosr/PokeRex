import { FrameSpin } from '../../../utils/keyFrames';
import styled from 'styled-components';
const AtLoading = () => {
    return(
        <SpinerContanier>
            <Spinner/>
        </SpinerContanier>
    )
}

const SpinerContanier = styled.section`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
`

const Spinner = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: conic-gradient(
        #0000 10%,
        #8f44fd
    );
    
    -webkit-mask:radial-gradient(
        farthest-side,
        #0000 calc(100% - 10px),
        #000
        0
    );
    
    animation: ${FrameSpin} 0.8s infinite linear;`


export default AtLoading;