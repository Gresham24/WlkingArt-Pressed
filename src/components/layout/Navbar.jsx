import { useState } from "react";
import logo from "../../assets/logo-black.png";
import openMenu from "../../assets/open-menu-icon.svg";
import {
    StyledNavbar,
    StyledLogo,
    StyledMenu,
    StyledNavLink,
    StyledNavLinks,
    StyledMobileMenu,
    StyledCloseButton,
    StyledMobileNavLink,
} from "../../styles/Navbar.styles";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/sizes", label: "Sizes" },
        { path: "/shop", label: "Shop" },
        { path: "/faq", label: "FAQ" }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <StyledNavbar>
            <StyledMenu 
                src={openMenu} 
                alt="icon to open menu" 
                onClick={toggleMenu}
            />
            <StyledLogo src={logo} alt="WlkingArt Pressed logo" />
            <StyledNavLinks>
                {navItems.map(({ path, label }) => (
                    <StyledNavLink 
                        key={path}
                        to={path}
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        {label}
                    </StyledNavLink>
                ))}
            </StyledNavLinks>
            
            <StyledMobileMenu $isOpen={isMenuOpen}>
                <StyledCloseButton onClick={closeMenu}>×</StyledCloseButton>
                {navItems.map(({ path, label }) => (
                    <StyledMobileNavLink 
                        key={path}
                        to={path}
                        className={({ isActive }) => isActive ? "active" : ""}
                        onClick={closeMenu}
                    >
                        {label}
                    </StyledMobileNavLink>
                ))}
            </StyledMobileMenu>
            <div style={{ width: "24px" }} />
        </StyledNavbar>
    );
}

export default Navbar;
