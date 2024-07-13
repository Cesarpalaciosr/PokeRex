import PropTypes from "prop-types";
import styled from "styled-components";
import { colorstype } from "../../utils/constStyles";

AtPokemonImage.propTypes = {
    image: PropTypes.any,
    bgColor: PropTypes.any
}

function AtPokemonImage({image, bgColor}) {
    return(        
            <ImageContainer bgColor = {bgColor}>
                <img className='pokemon'  src={image} width="auto" height="auto" alt="Company Logo"  />
            </ImageContainer>
    )
}

const ImageContainer = styled.figure`
    text-align: center;
    border-radius: 15px;
    padding: 0px;
    margin: 5px 5px 0px 5px ;
    height: 120px;
    background: ${(props) =>
        colorstype[props.bgColor] || "#f8f9fa"};;
    ${'' /* background: '#333'; */}
`

export default AtPokemonImage;