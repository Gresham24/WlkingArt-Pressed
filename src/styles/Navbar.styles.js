import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../constants";
import { devices } from "../constants";

export const StyledNavbar = styled.nav`
    background-color: ${colors.white};
    border-radius: 12px;
    padding: 12px 23px 10px;
    margin: 30px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    @media ${devices.tablet} {
        flex-direction: column;
    }
    @media ${devices.laptop} {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        margin: 0;
        border-radius: 0px;
        padding: 20px 0;
    }
`;

export const StyledLogo = styled.img`
    width: 130px;
    height: auto;

    @media ${devices.tablet} {
        width: 150px;
    }
    @media ${devices.laptop} {
        width: 180px;
    }
`;

export const StyledMenu = styled.img`
    cursor: pointer;
    width: 24px;
    height: 24px;
    
    @media ${devices.tablet} {
        display: none;
    }
`;

export const StyledMobileMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 1001;

    @media ${devices.tablet} {
        display: none;
    }
`;

export const StyledMobileNavLink = styled(NavLink)`
    color: ${colors.black};
    text-decoration: none;
    font-weight: 500;
    font-size: 24px;
    padding: 20px;
    width: 100%;
    text-align: center;
    transition: color 0.3s ease;

    &:hover {
        color: ${colors.hotPink};
        font-weight: 500;
    }

    &.active {
        color: ${colors.hotPink};
        font-weight: 700;
    }
`;

export const StyledCloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 32px;
    cursor: pointer;
    color: ${colors.black};
    padding: 5px 15px;
    
    &:hover {
        color: ${colors.hotPink};
    }
`;

// Optional: Add overlay when menu is open
export const StyledOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${({ $isOpen }) => $isOpen ? 'block' : 'none'};
    z-index: 1000;

    @media ${devices.tablet} {
        display: none;
    }
`;



export const StyledNavLinks = styled.div`
    display: none;
    margin-top: 10px;
    gap: 1.5rem;

    @media ${devices.tablet} {
        display: flex;
    }
`;

export const StyledNavLink = styled(NavLink)`
    color: ${colors.black};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease, transform 0.2s ease;
    &:hover {
        color: ${colors.hotPink};
        font-weight: 500;
        transform: scale(1.1);
    }
    &.active {
        color: ${colors.hotPink};
        font-weight: 700;
        transform: scale(1.1);
    }
`;
