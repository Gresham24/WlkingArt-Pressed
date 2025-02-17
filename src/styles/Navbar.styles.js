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
    /* Hambuger icon styling */

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
