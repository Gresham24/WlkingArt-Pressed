import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../constants";
import { devices } from "../constants";

export const StyledHomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0px 24px;

    height: 100vh;

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: -1;
        pointer-events: none;
    }

    div {
        position: absolute;
        bottom: 100px;
        background-color: ${colors.fadedWhite};
        padding: 24px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        max-width: 300px;

        @media ${devices.tablet} {
            max-width: none;
        }
    }
`;

export const StyledHeroH1 = styled.h1`
    font-family: "Playfair Display", serif;
    font-size: 24px;
`;

export const StyledShopCTA = styled(Link)`
    text-decoration: none;
    background-color: ${colors.hotPink};
    border: 1px transparent solid;
    border-radius: 12px;
    color: ${colors.white};
    font-size: 14px;
    font-weight: 600;
    font-family: Montserrat;
    padding: 10px;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
    &:hover {
        background-color: ${colors.white};
        color: ${colors.hotPink};
        border: 1px solid ${colors.hotPink};
    }
`;
