import './AtCard.css';
import Pokesprite from '../../atoms/poke/pokesprite';
import AtType from '../atType/AtType';
import AtIdPokedex from '../../atoms/atIdPokedex/AtIdPokedex';
import AtTitle from '../../atoms/atTitle/AtTitle';

function AtCard() {
    return(

        <div className='pokemoncart'> 
            <div className='banner' style={{background: "#aaa6a6b0"}}>
                <Pokesprite/>
            </div>
            <div className='info'>
                <AtIdPokedex/>
                <AtTitle/>
            
                
            <div className='footer'>
                <AtType/>  
                <AtType/>  
            </div>
</div>
        </div>

        
    )
}

export default AtCard;