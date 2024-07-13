// import styled from "styled-components"
import './style.css';
import styled from 'styled-components';
import {colorstype} from '../../utils/constStyles';
import PropTypes from "prop-types";

function AtPokemonInfo({PokemonId, PokemonName, PokemonTypes}) {
    return (
        <InfoContainer>
            <p className='NumPokedex'>N.º {PokemonId}</p>
            <p className='NamePokedex' style={{ 
                            fontSize: '30px',
                            marginBottom: '15px',
                            color: 'black',
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
    PokemonId: PropTypes.number,    
    PokemonName: PropTypes.string,
    PokemonTypes: PropTypes.any
}

const TypeLabel = styled.label`
    display: inline;
    font-size: 20px;
    font-weight: bold;
    font-family: "Pixelify Sans";
    text-transform: capitalize;
    font-optical-sizing: 'auto';
    font-style: 'normal';
    color: white;
    text-shadow: 1px 1px 2px black;
    -webkit-text-stroke-width: 0.3px;
    -webkit-text-stroke-color: black;
    
`;

const InfoContainer = styled.div`
    padding-left:7px;
    ${'' /* padding-bottom: 55px; */}
`;

const TypeLabelContainer = styled.div`
        display:flex;
        justify-content:center;
        border-radius: 5px;    
        margin-right: 15px;
        border: 3px solid #3333;
        width: 90px;
        background-color: ${(props) => colorstype[props.color  || 'fire']};
`

const LabelContainer = styled.div`
    width:  20px;
    display:    grid;
    grid-template-columns: repeat(2, 1fr);
    
`

export default AtPokemonInfo;