import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../constants";


export const StyledFooter = styled.footer`
    background-color: ${colors.mattBlack};
    padding: 22px 33px;
    color: white;
`;

export const StyledFooterLinkWrapper = styled.div`
    background-color: ${colors.hotPink};
    border-radius: 16px;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`;

export const StyledFooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 18px;
`;

export const StyledFooterLink = styled(Link)`
    text-decoration: none;
    color: ${colors.white};

    &:hover {
        color: ${colors.black};
    }
`;

export const StyledSocialsLinks = styled.div`
    p {
        font-weight: 600;
        margin: 0;
    }
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
`;

export const StyledSocialIconWrapper = styled.div`
    display: flex;
    gap: 10px;
`;
export const StyledSocialIcon = styled(Link)`
    color: ${colors.white};
    text-decoration: none;
`;
