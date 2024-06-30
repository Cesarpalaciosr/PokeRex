import './AtCard.css';
import colorstype from '../../atoms/atColor/colortype';
import Pokesprite from '../../atoms/poke/pokesprite';
import AtType from '../atType/AtType';

function AtCard() {
    return(

        <div > 
            <div>
                <Pokesprite/>
            </div>   
            
            <div>
                <AtType/>  
            </div>

        </div>

        
    )
}

export default AtCard;