import OrHeader from "../components/organisms/orHeader/OrHeader";
import styled from "styled-components";
import Footer from "../components/organisms/orFooter/Footer";

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