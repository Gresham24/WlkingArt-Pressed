import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../constants";
import { devices } from "../constants";

export const StyledFooter = styled.footer`
    background-color: ${colors.mattBlack};
    padding: 22px 33px;
    color: white;
`;

export const StyledFooterLinkWrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media ${devices.tablet} {
        gap: 0;
        flex-direction: row;
        justify-content: space-around;
    }
`;

export const StyledFooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 22px;
    text-align: left;
`;

export const StyledFooterLink = styled(NavLink)`
    text-decoration: none;
    color: ${colors.white};
    font-weight: 500;
    transition: color 0.3s ease, transform 0.2s ease;
    display: inline-block;

    &.active {
        color: ${colors.hotPink};
        font-weight: 700;
        transform: scale(1.1);
    }
    @media ${devices.touch} {
        &:hover,
        &:active {
            color: ${colors.hotPink};
            transform: scale(1.05);
        }
    }

    @media (hover: hover) {
        &:hover {
            color: ${colors.hotPink};
    
            transform: scale(1.1);
        }
    }
`;

export const StyledSocialsLinks = styled.div`
    p {
        font-weight: 700;
        margin: 0;
    }
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
`;

export const StyledSocialIconWrapper = styled.div`
    display: flex;
`;
export const StyledSocialIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    color: ${colors.white};
    transition: color 0.5s ease;
    margin-right: 14px;

    &:hover {
        color: ${colors.hotPink};
        transform: scale(1.1);
    }
    @media ${devices.touch} {
        &:hover, &:active {
            color: ${colors.black};
            transform: none;
        }
    }

    @media (hover: hover) {
        &:hover {
            color: ${colors.hotPink};
            transform: scale(1.05);
        }
    }
`;
