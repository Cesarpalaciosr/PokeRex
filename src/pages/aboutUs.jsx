import OrHeader from "../components/organisms/orHeader/OrHeader";
import MoPokemonCard from "../components/molecules/moPokemonCard/MoPokemonCard";
import styled from "styled-components";
import Footer from "../components/atoms/atFooter/Footer";
function AboutPage() {
    return(
        <>
        <AboutPageStyle>
            <OrHeader/>
            
        </AboutPageStyle>
        <Footer/>
        </>
    );
}

const AboutPageStyle = styled.div`
    padding: 0px 0px 0px 0px;
    height: 100vh;
`;

export default AboutPage;