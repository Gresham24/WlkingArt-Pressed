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
    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/sizes", label: "Sizes" },
        { path: "/shop", label: "Shop" },
        { path: "/faq", label: "FAQ" }
    ];

    return (
        <StyledNavbar>
            <StyledMenu src={openMenu} alt="icon to open menu" />
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
            <div style={{ width: "24px" }} />
        </StyledNavbar>
    );
}

export default Navbar;
