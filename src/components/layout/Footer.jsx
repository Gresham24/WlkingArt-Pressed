import {
    StyledFooter,
    StyledFooterLinkWrapper,
    StyledFooterLink,
    StyledFooterLinks,
    StyledSocialsLinks,
    StyledSocialIconWrapper,
    StyledSocialIcon,
} from "../../styles/Footer.styles";

function Footer() {
    return (
        <StyledFooter>
            <StyledFooterLinkWrapper>
                <StyledFooterLinks>
                    <StyledFooterLink to="/">Home</StyledFooterLink>
                    <StyledFooterLink to="/">About</StyledFooterLink>
                    <StyledFooterLink to="/">Sizes</StyledFooterLink>
                    <StyledFooterLink to="/">Shop Collection</StyledFooterLink>
                    <StyledFooterLink to="/">FAQ</StyledFooterLink>
                    <StyledFooterLink to="/">Privacy Policy</StyledFooterLink>
                </StyledFooterLinks>
                <StyledSocialsLinks>
                    <p>Follow us</p>
                    <StyledSocialIconWrapper>
                        <StyledSocialIcon to="/">IG</StyledSocialIcon>
                        <StyledSocialIcon to="/">TT</StyledSocialIcon>
                        <StyledSocialIcon to="/">FB</StyledSocialIcon>
                    </StyledSocialIconWrapper>
                </StyledSocialsLinks>
            </StyledFooterLinkWrapper>
            <hr />
            <small>
                © 2025 WlkingArt Pressed. All rights reserved. Website 👨🏾‍💻 by
                Gresham Tembo
            </small>
        </StyledFooter>
    );
}

export default Footer;
