import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaPhone } from "react-icons/fa6";
function Footer() {
    return <>
                <div className='footer'>
                    <div className='line'/>
                    
                    <div className='footer2'>
                    <div className='whoweare'>
                        <h3 className="footerText">¿Quiénes somos?</h3>
                        <h3 className="footerText">Ponte en contacto con nosotros</h3>
                    </div>
                    <IconContext.Provider value={{ color: "white"}}>
                    <div className='logos'>
                    <FaFacebook className='logo'/>
                    <FaInstagram className='logo'/>
                    <FaPhone className='logo' />
                    </div>
                    </IconContext.Provider>;
                    </div>
                </div>
            </>;
}

export default Footer;