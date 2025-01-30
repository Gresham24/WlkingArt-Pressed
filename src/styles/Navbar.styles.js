import styled from "styled-components";
import { Link } from "react-router-dom";
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
        margin: 0;
        border-radius: 0px;
        padding: 24px;
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
    margin-top: 5px;
    gap: 1.5rem;

    @media ${devices.tablet} {
        display: flex;
    }
`;

export const StyledNavLink = styled(Link)`
    color: ${colors.black};
    text-decoration: none;
    &:hover {
        color: red;
    }
`;
