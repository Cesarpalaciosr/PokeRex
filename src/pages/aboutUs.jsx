import OrHeader from "../organisms/orHeader/OrHeader";
import styled from "styled-components";
import MoPokemonCard from "../molecules/moPokemonCard/MoPokemonCard";

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