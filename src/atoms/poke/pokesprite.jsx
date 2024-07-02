import PropTypes from "prop-types"

Pokesprite.propTypes = {
    image: PropTypes.any 
}

function Pokesprite({image}) {
    return(
        <>
            <div>
                <img className='pokemon'  src={image} width="auto" height="auto" alt="Company Logo"  />
            </div>

        </>
 
        
    )
}

export default Pokesprite;