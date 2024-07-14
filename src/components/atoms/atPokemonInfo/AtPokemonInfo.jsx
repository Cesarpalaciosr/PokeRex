import styled from 'styled-components';
import { InfoContainer, LabelContainer, TypeLabelContainer, TypeLabel } from '../../../utils/TagsStyledComponent';
import PropTypes from "prop-types";

function AtPokemonInfo({PokemonId, PokemonName, PokemonTypes}) {
    return (
        <InfoContainer>
            <StyledP>N.º {PokemonId}</StyledP>
            {/* <StyledP>{PokemonName}</StyledP> */}
            <p style={{ 
                            fontSize: '30px',
                            marginBottom: '20px',
                            color: 'black',
                            margin: '0px',
                            fontWeight: 'bold',
                            fontFamily: "Pixelify Sans",
                            fontOpticalSizing: 'auto',
                            fontStyle: 'normal',
                            textTransform: 'capitalize'         }}>{PokemonName}</p>
            <LabelContainer>
                {PokemonTypes.map( type => {
                        return <TypeLabelContainer key={type.slot} color={type.type.name}>
                                        <TypeLabel>{type.type.name}</TypeLabel>
                                </TypeLabelContainer>
                    }
                )}  
            </LabelContainer>
        </InfoContainer>
    )    
}

AtPokemonInfo.propTypes = {
    PokemonId: PropTypes.string,    
    PokemonName: PropTypes.string,
    PokemonTypes: PropTypes.any
}

const StyledP = styled.p`
    font-size: 28px;
    color: #808080;
    margin: 0px;
    font-weight: 'bold';
    font-family: 'Pixelify Sans';
    text-transform: capitalize;
    font-optical-sizing: 'auto';
    font-style: 'normal';
`;

export default AtPokemonInfo;