// import styled from "styled-components"
import './style.css';
import styled from 'styled-components';
import {colorstype} from '../../utils/constStyles';
import PropTypes from "prop-types";

function AtPokemonInfo({PokemonId, PokemonName, PokemonTypes}) {
    return (
        <>
            <p className='NumPokedex'>N.º {PokemonId}</p>
            <p className='NamePokedex' style={{ fontWeight:'bold'}}>{PokemonName}</p>
            {/* <typ className='type' style={{background: colorstype['fighting']}}>     */}
                {PokemonTypes.map( type => {
                        return <TypeLabel key={type.slot}>{type.type.name}</TypeLabel>
                    }
                )}  
            {/* </typ> */}
        </>
    )    
}

AtPokemonInfo.propTypes = {
    PokemonId: PropTypes.number,    
    PokemonName: PropTypes.string,
    PokemonTypes: PropTypes.any
}

const TypeLabel = styled.label`
    font-size: 20px;
    border-radius: 16px;
    margin-right: 15px;
    padding: 12px;
    border: 1px solid black;
    color: white;
    background-color: ${(props) => colorstype[props.children  || 'fire']};
`;


export default AtPokemonInfo;