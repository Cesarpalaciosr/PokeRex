import PropTypes from "prop-types"

AtPokemonImage.propTypes = {
    image: PropTypes.any 
}

function AtPokemonImage({image}) {
    return(
        <>
            <div>
                <img className='pokemon'  src={image} width="auto" height="auto" alt="Company Logo"  />
            </div>

        </>
 
        
    )
}

export default AtPokemonImage;