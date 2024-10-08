import AtPokemonImage from '../../atoms/AtPokemonImage/AtPokemonImage';
import AtPokemonInfo from '../../atoms/AtPokemonInfo/AtPokemonInfo';
import PropTypes from "prop-types";
import styled from 'styled-components';


function MoPokemonCard({pokemon, onClick}) {
    return(
        <ContainerPokemonCard onClick={onClick}> 
                <AtPokemonImage bgColor={pokemon.types[0].type.name} image={pokemon.sprites.front_default}/>
                <div>
                        <AtPokemonInfo 
                            PokemonId={pokemon.id.toString().padStart(6, '0')} 
                            PokemonName={pokemon.name} 
                            PokemonTypes={pokemon.types}/>
                </div>
        </ContainerPokemonCard>
    )
}


MoPokemonCard.propTypes = {
    pokemon: PropTypes.any,
    onClick: PropTypes.func
}
const ContainerPokemonCard = styled.section`
    background-color: #ffff;
    height: 280px;
    width: 300px;
    border-radius:20px;
    overflow: hidden;
    margin-top:5px;
    margin-bottom:5px;
    margin-left: 6px;
    margin-right: 6px;
    transition: 0.3s;
    

    &:hover{
        transition:0.4s;
        box-shadow: 0px 0px 20px #ddd;
        height: 300px;
        width: 320px;
    }

`
export default MoPokemonCard;