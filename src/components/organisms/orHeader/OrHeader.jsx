import styled from "styled-components";
import logo from '../../../assets/logo/Pokeball-header-logo.png';
import AtButton from "../../atoms/atButton/AtButton";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

function OrHeader() {
    const navigate = useNavigate();
    const handleAbout = () => {
        navigate('/about');
      };
    const handleHome = () => {
        navigate('/');
      };
    return (
            <HeaderComponent>
                <ImageContainer className="header__logo" onClick={handleHome}>
                    <img src={logo} alt="Company Logo" width="60" height="60" />
                    <div>
                        <label style={{
                            fontSize: '34px',
                            marginLeft: '15px',
                            color: '#ffffffff',
                            fontWeight: 'bold',
                            fontFamily: "Pixelify Sans",
                            fontOpticalSizing: 'auto',
                            fontStyle: "normal"                        }}>PokeRex</label>
                    </div>
                </ImageContainer>
                <div>
                    <SearchBar/>
                </div>
                <RedirectionContainer>
                    <AtButton variant="redirection" size="sm" onClick={handleHome}>Home</AtButton>
                    <AtButton variant="redirection" size="sm" onClick={handleAbout}>About Us</AtButton>
                </RedirectionContainer>

            </HeaderComponent>
    );
}

const HeaderComponent = styled.div`
    ${'' /* background-color: #242424; */}
    background-color: #343434;
    min-width: 98vw;
    margin: 0px;
    position: sticky; top: 0;
    z-index:2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${'' /* background-color: #333; */}
    ${'' /* color: #fff; */}
    ${'' /* padding: 0 45px 0 30px; */}
`;

const ImageContainer = styled.div`
    display:flex;
    align-items:center;
    padding-left: 15px
`
const RedirectionContainer = styled.div`
    ${'' /* padding-right: 30px */}
`;
export default OrHeader;