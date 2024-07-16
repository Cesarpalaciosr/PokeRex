import styled from 'styled-components';
import AtButton from '../../atoms/atButton/AtButton';
import AtPokemonImage from '../../atoms/atPokemonImage/AtPokemonImage';
import PropTypes from "prop-types";
import AtPokemonInfo from '../../atoms/atPokemonInfo/AtPokemonInfo';


function OrModal({handleClose, pokemon}) {
    return(
        <Modal>
            <ModalContent>
            <AtPokemonImage bgColor={pokemon.types[0].type.name} image={pokemon.sprites.front_default}/>
                <div>
                        <AtPokemonInfo 
                            PokemonId={pokemon.id.toString().padStart(6, '0')} 
                            PokemonName={pokemon.name} 
                            PokemonTypes={pokemon.types}/>
                </div>
                {/* {children} */}
                {/* <button onClick={handleClose}>close</button> */}
                <AtButton size='md' variant='fire' onClick={handleClose}>close</AtButton>
            </ModalContent>
        </Modal>
            )
}

OrModal.propTypes = {
    pokemon: PropTypes.any,
    handleClose: PropTypes.func
}
// Styled Components
const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 20px;
  width: 30%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
export default OrModal;