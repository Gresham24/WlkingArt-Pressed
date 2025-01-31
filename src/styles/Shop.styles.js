import styled from "styled-components";

import { colors } from "../constants";
// import { devices } from "../constants";

export const StyledShopContainer = styled.main`
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* padding: 0px 24px; */
    height: 100vh;

    border: 2px solid red;
`;

export const StyledBackgroundImg = styled.div`
    position: absolute;
    top: 0px;
    z-index: -1;
`;

export const StyledH1 = styled.h1`
    margin-top: 150px;

    font-family: Raleway, serif;
    font-weight: 700;
    font-size: 32px;
    color: ${colors.white};

    background-color:  blue;

`;

export const StyledShopCTA = styled.a`


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
