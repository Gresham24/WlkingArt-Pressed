import logo from "../../assets/logo-black.png";
import openMenu from "../../assets/open-menu-icon.svg";
import {
    StyledNavbar,
    StyledLogo,
    StyledMenu,
    StyledNavLink,
    StyledNavLinks,
} from "../../styles/Navbar.styles";

function Navbar() {
    return (
        <StyledNavbar>
            <StyledMenu src={openMenu} alt="icon to open menu" />
            <StyledLogo src={logo} alt="WlkingArt Pressed logo" />
            <StyledNavLinks>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/">About</StyledNavLink>
                <StyledNavLink to="/">Sizes</StyledNavLink>
                <StyledNavLink to="/shop">Shop</StyledNavLink>
                <StyledNavLink to="/">FAQ</StyledNavLink>
            </StyledNavLinks>
            <div style={{ width: "24px" }} />
        </StyledNavbar>
    );
}

export default Navbar;
