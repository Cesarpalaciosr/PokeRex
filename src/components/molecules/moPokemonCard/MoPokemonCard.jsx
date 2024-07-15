import AtPokemonImage from '../../atoms/atPokemonImage/AtPokemonImage';
import AtPokemonInfo from '../../atoms/atPokemonInfo/AtPokemonInfo';
import PropTypes from "prop-types";
import styled from 'styled-components';
import AtModal from '../../atoms/atModal/atModal';

function MoPokemonCard({pokemon}) {
    return(
        <ContainerPokemonCard className='pokemoncard' onClick={() => setIsPop20pen(!isPop20pen)}> 
                <AtPokemonImage bgColor={pokemon.types[0].type.name} image={pokemon.sprites.front_default}/>
                <div className='info'>
                        <AtPokemonInfo 
                            PokemonId={pokemon.id.toString().padStart(6, '0')} 
                            PokemonName={pokemon.name} 
                            PokemonTypes={pokemon.types}/>
                            
                </div>


        </ContainerPokemonCard>

    )
}


MoPokemonCard.propTypes = {
    pokemon: PropTypes.any 
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
        height: 300px;
        width: 320px;
    }

`
export default MoPokemonCard;