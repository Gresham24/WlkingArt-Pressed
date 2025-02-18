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
        background-color: rgba(255, 255, 255, 0.9);
        padding: 24px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        max-width: 300px;

        @media ${devices.tablet} {
            max-width: 500px;
        }
    }
`;

export const StyledHeroH1 = styled.h1`
    font-size: 36px;
    font-family: Raleway, serif;
`;
export const StyledSubheading = styled.p`
    font-weight: 500;
    font-size: 14px;
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
    transition: transform 0.3s ease;
    &:hover {
        background-color: ${colors.white};
        color: ${colors.hotPink};
        border: 1px solid ${colors.hotPink};
        transform: scale(1.05); 
    }
`;
