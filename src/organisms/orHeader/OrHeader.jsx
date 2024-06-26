import styled from "styled-components";
import logo from '../../assets/logo/Pokeball-header-logo.png'
import AtButton from "../../atoms/atButton/AtButton";

function OrHeader() {
    return (
            <HeaderComponent>
                <ImageContainer className="header__logo">
                    <img src={logo} alt="Company Logo" width="60" height="60" />
                </ImageContainer>
                <div></div>
                <RedirectionContainer>
                    <AtButton variant="redirection" size="sm">Nosotros</AtButton>
                    <AtButton variant="redirection" size="sm">texto de ejemplo</AtButton>
                    <AtButton variant="redirection" size="sm">xd</AtButton>
                </RedirectionContainer>

            </HeaderComponent>
    );
}

const HeaderComponent = styled.div`
    ${'' /* background-color: #242424; */}
    background-color: #343434;
    width: 100vw;
    margin: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    ${'' /* padding: 0 45px 0 30px; */}
`;

const ImageContainer = styled.div`
    display:flex;
    align-items:center;
    padding-left: 15px
`
const RedirectionContainer = styled.div`
    padding-right: 30px
`;
export default OrHeader;