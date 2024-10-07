import PropTypes from "prop-types";
import styled from "styled-components";
import { colorstype } from "../../../utils/constColorStyle";

AtPokemonImage.propTypes = {
    image: PropTypes.any,
    bgColor: PropTypes.any
}

function AtPokemonImage({image, bgColor}) {
    return(        
            <ImageContainer bgColor = {bgColor}>
                <ImageStyle className='pokemon'  src={image} alt="Company Logo"  />
            </ImageContainer>
    )
}

const ImageContainer = styled.figure`
    display:flex;
    justify-content:center;
    text-align: center;
    border-radius: 15px;
    padding: 0px;
    margin: 5px 5px 0px 5px ;
    height: 130px;
    background: ${(props) => colorstype[props.bgColor] || "#f8f9fa"};
`

const ImageStyle = styled.img`
    width: auto;
    height: auto;
    filter: drop-shadow(
        0 0 10px rgba(0, 0, 0, .8)
    );
`

export default AtPokemonImage;