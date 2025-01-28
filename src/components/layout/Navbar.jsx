import logo from "../../assets/logo-black.png";
import { StyledNavbar } from "../../styles/Navbar.styles";
import { StyledLogo } from "../../styles/Navbar.styles";

function Navbar() {
    return (
        <>
            <StyledNavbar>
                
                <StyledLogo src={logo} alt="WlkingArt Pressed logo" />
            </StyledNavbar>
        </>
    );
}

export default Navbar;
