import {keyframes} from "styled-components"

const CardAnimation = keyframes`
    from {
        opacity: 0;
        scale: 10%
    }
    to{
        opacity:1; 
        scale:100%;
    }
`
const FrameSpin = keyframes`
    to{
        transform: rotate(1turn);
    }
`
export {CardAnimation, FrameSpin}