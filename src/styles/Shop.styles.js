import styled from "styled-components";
import { Swiper } from "swiper/react";
import { colors } from "../constants";

export const StyledShopContainer = styled.main`
    background-image: url(${props => props.$backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    padding: 150px 0;
    display: flex;
    flex-direction: column;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        /* background-color: rgba(255, 255, 255, 0.2); */
        z-index: 1;
    }

    > * {
        position: relative;
        z-index: 2;
    }
`;


export const StyledSwiper = styled(Swiper)`
    margin-bottom: 40px;

    .swiper-button-next,
    .swiper-button-prev {
        color:  ${colors.hotPink};
        &::after {
            font-weight: 900;  /* Make arrows bolder */
            font-size: 50px;   /* Increase size */
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.36); /* Optional: add some depth */
        }
    }

    .swiper-button-next {
        right: 10px;
    }

    .swiper-button-prev {
        left: 10px;
    }

    .swiper-pagination-bullet-active {
        background-color: ${colors.hotPink};
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
        transition: all 0.3s ease;
        transform: scale(0.9);
    }

    .swiper-slide-active {
        transform: scale(1);
    }
`;

export const StyledH1 = styled.h1`
    font-size: 36px;
    color: ${colors.black};
    text-align: center;
    margin-bottom: 30px;
`;

export const StyledShopCTA = styled.a`
    align-self: center;
    display: flex;
    align-items: center;
    gap: 5px;
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
    cursor: pointer;
    &:hover {
        cursor: pointer;
        background-color: ${colors.white};
        color: ${colors.hotPink};
        border: 1px solid ${colors.hotPink};
        transform: scale(1.05);
    }
`;
