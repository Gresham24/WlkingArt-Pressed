import styled from "styled-components";
import { colors } from "../constants";

export const StyledSizesContainer = styled.div`
    padding: 50px 0;
    /* max-width: 780px; */
    margin: 100px auto 0px;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
`;

export const StyledSizesH1 = styled.h1`
    font-size: 36px;
    margin-bottom: 20px;
`;


export const StyledSection = styled.section`
    width: 100%;
    margin-bottom: 40px;
    background-image: ${props => `url(${props.$backgroundImage})`};
    background-size: cover;
    background-position: center;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color:rgba(255, 222, 244, 0.82);
        z-index: 1;
    }
`;

export const StyledSectionContent = styled.div`
    position: relative;
    padding: 50px;

    z-index: 2;
`;


export const StyledSizesText = styled.p`
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 10px;
`;

export const StyledSizesSubheading = styled.h2`
    font-size: 22px;
    font-style: italic;
    line-height: 1.5;
    margin-bottom: 10px;
    color: ${colors.hotPink};
`;


export const StyledLogo = styled.img`
    width: 250px;
    height: auto;
    margin: 20px;
`;

