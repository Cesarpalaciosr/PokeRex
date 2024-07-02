// import styled from "styled-components"
import './style.css';
import styled from 'styled-components';
// import colorstype from '../../atoms/atColor/colortype';
import PropTypes from "prop-types";

function AtPokemonInfo({PokemonId, PokemonName, PokemonTypes}) {
    return (
        <>
            <p className='NumPokedex'>N.º {PokemonId}</p>
            <p className='NamePokedex'>Name: {PokemonName}</p>
            {/* <typ className='type' style={{background: colorstype.fighting}}>     */}
                {PokemonTypes.map( type => {
                        return <TypeLabel key={type.slot}> {type.type.name}</TypeLabel>
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
    font-size: 28px;
    border-radius: 8px;
    margin-right: 15px;
    color: black;
    background-color: aqua
    ${'' /* background-color: ${(props) => colorstype[props.PokemonTypes.type.type.name] || 'fire'} */}
`;



export default AtPokemonInfo