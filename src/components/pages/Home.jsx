import valentineVideo from "../../assets/valentine-nails-noaudio.mp4";
import {
    StyledHeroH1,
    StyledSubheading,
    StyledHomeContainer,
    StyledShopCTA,
} from "../../styles/Home.styles";

function Home() {
    return (
        <StyledHomeContainer>
            <video autoPlay muted loop playsInline>
                <source src={valentineVideo} type="video/mp4" />
                Video not supported by your browser.
            </video>
            <div>
                <StyledHeroH1>Where Luxury💅 Meets Creativity🎨</StyledHeroH1>
                <StyledSubheading>
                    We specialize in gel-x handcrafted, high-quality press-on
                    nails designed to elevate your style effortlessly.
                </StyledSubheading>
                <StyledShopCTA to="/shop">Shop our new collection</StyledShopCTA>
            </div>
        </StyledHomeContainer>
    );
}

export default Home;
