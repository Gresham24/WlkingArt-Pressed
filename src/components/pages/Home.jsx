import valentineVideo from "../../assets/valentine-nails-noaudio.mp4";
import {
    StyledHeroH1,
    StyledHomeContainer,
    StyledShopCTA,
} from "../../styles/Home.Styles";

function Home() {
    return (
        <StyledHomeContainer>
            <video autoPlay muted loop>
                <source src={valentineVideo} type="video/mp4" />
                Video not supported by your browser.
            </video>
            <div>
                <StyledHeroH1>GEL - X LUXURY PRESS ON NAILS</StyledHeroH1>
                <StyledShopCTA to="/">Shop our new collection</StyledShopCTA>
            </div>
        </StyledHomeContainer>
    );
}

export default Home;
