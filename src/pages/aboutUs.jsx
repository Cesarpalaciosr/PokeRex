import OrHeader from "../organisms/orHeader/OrHeader";
import styled from "styled-components";
import AtCard from "../molecul/AtCard/AtCard";

function AboutPage() {
    return(
        <AboutPageStyle>
            <OrHeader/>
            <AtCard/>
        </AboutPageStyle>
    );
}

const AboutPageStyle = styled.div`
    padding: 0px 0px 0px 0px;
    height: 100vh;
`;

export default AboutPage;