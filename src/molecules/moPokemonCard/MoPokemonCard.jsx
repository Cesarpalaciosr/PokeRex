import './AtCard.css';
import Pokesprite from '../../atoms/poke/pokesprite';
import AtPokemonInfo from '../../atoms/atPokemonInfo/AtPokemonInfo';
import PropTypes from "prop-types"

function MoPokemonCard({pokemon}) {
    return(
        <div className='pokemoncart'> 
            <div className='banner' style={{background: "#aaa6a6b0"}}>
                <Pokesprite image={pokemon.sprites.front_default}/>
            </div>
            <div className='info'>
                        <AtPokemonInfo 
                            PokemonId={pokemon.id} 
                            PokemonName={pokemon.name} 
                            PokemonTypes={pokemon.types}/>
            </div>
        </div>
        
    )
}


MoPokemonCard.propTypes = {
    pokemon: PropTypes.any 
}

export default MoPokemonCard;