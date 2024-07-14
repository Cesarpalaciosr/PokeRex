import OrHeader from "../components/organisms/orHeader/OrHeader";
import MoPokemonCard from "../components/molecules/moPokemonCard/MoPokemonCard";
import styled from "styled-components";

function AboutPage() {
    return(
        <AboutPageStyle>
            <OrHeader/>
            <div>
            <MoPokemonCard/> 
            </div>
        </AboutPageStyle>
    );
}

const AboutPageStyle = styled.div`
    padding: 0px 0px 0px 0px;
    height: 100vh;
`;

export default AboutPage;