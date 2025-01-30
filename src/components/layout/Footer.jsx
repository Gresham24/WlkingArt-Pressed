import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";


import {
    StyledFooter,
    StyledFooterLinkWrapper,
    StyledFooterLink,
    StyledFooterLinks,
    StyledSocialsLinks,
    StyledSocialIconWrapper,
    StyledSocialIcon,
} from "../../styles/Footer.styles";

const socialLinks = [
    {
        href: "https://www.instagram.com/",
        name: "Instagram",
        icon: <FaInstagram size={24} />,
    },
    {
        href: "https://www.tiktok.com/",
        name: "TikTok",
        icon: <FaTiktok size={24} />,
    },
    {
        href: "https://www.facebook.com/",
        name: "Facebook",
        icon: <FaFacebook size={24} />,
    },
    {
        href: "https://twitter.com/",
        name: "Twitter",
        icon: <FaTwitter size={24} />,
    },
];

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
                        {socialLinks.map((social) => (
                            <StyledSocialIcon
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.icon}
                            </StyledSocialIcon>
                        ))}
                    </StyledSocialIconWrapper>
                </StyledSocialsLinks>
            </StyledFooterLinkWrapper>
            <hr />
            <small>© 2025 WlkingArt Pressed. Website 👨🏾‍💻 by Gresham Tembo</small>
        </StyledFooter>
    );
}

export default Footer;
