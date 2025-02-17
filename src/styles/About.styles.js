import styled from "styled-components";
import { colors } from "../constants";

export const StyledAboutContainer = styled.div`
    padding: 50px;
    text-align: center;
    max-width: 970px;
    margin: 100px auto 0px;
`;

export const StyledAboutH1 = styled.h1`
    font-size: 36px;
    margin-bottom: 20px;
`;

export const StyledAboutText = styled.p`
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 10px;
`;

export const StyledAboutSubheading = styled.h2`
    font-size: 22px;
    font-style: italic;
    line-height: 1.5;
    margin-bottom: 10px;
    color: ${colors.hotPink};
`;


export const StyledLogo = styled.img`
    width: 250px;
    height: auto;
    margin-top: 20px;
`;