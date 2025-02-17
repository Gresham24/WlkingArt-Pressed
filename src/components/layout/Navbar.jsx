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
                <StyledNavLink to="/" activeClassName="active">Home</StyledNavLink>
                <StyledNavLink to="/about" activeClassName="active">About</StyledNavLink>
                <StyledNavLink to="/sizes" activeClassName="active">Sizes</StyledNavLink>
                <StyledNavLink to="/shop" activeClassName="active">Shop</StyledNavLink>
                <StyledNavLink to="/faq" activeClassName="active">FAQ</StyledNavLink>
            </StyledNavLinks>
            <div style={{ width: "24px" }} />
        </StyledNavbar>
    );
}

export default Navbar;
