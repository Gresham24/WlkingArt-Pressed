import styled from "styled-components";
import { colors } from "../constants";
import { devices } from "../constants";

export const StyledNavbar = styled.nav`
    background-color: ${colors.white};
    border-radius: 12px;
    padding: 12px 12px 10px;

    @media ${devices.tablet} {
        background: lightgreen;
    }
`;

export const StyledLogo = styled.img`
    width: 130px;
    height: auto;
    @media ${devices.tablet} {
        width: 150px;
    }
`;
