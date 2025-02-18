import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
 
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
    StyledFooter,
    StyledFooterLinkWrapper,
    StyledFooterLink,
    StyledFooterLinks,
    StyledSocialsLinks,
    StyledSocialIconWrapper,
    StyledSocialIcon,
} from "../../styles/Footer.styles";

const footerLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/sizes", label: "Sizes" },
    { path: "/shop", label: "Shop Collection" },
    { path: "/faq", label: "FAQ" },
    { path: "/privacypolicy", label: "Privacy Policy" }
];

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
    const location = useLocation();

    // Scroll to top whenever the route changes
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        });
    }, [location]);

    return (
        <StyledFooter>
            <StyledFooterLinkWrapper>
            <StyledFooterLinks>
                    {footerLinks.map(({ path, label }) => (
                        <StyledFooterLink 
                            key={path}
                            to={path}
                            className={({ isActive }) => isActive ? "active" : ""}
                        >
                            {label}
                        </StyledFooterLink>
                    ))}
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
            <small>
                © 2025 WlkingArt Pressed | Website 👨🏾‍💻 by Gresham Tembo
            </small>
        </StyledFooter>
    );
}

export default Footer;
