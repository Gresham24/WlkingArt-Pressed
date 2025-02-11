import styled from "styled-components";
import { colors } from "../constants";

export const ProductItemContainer = styled.div`
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: ${colors.white};
    padding-bottom: 20px;
    max-width: 350px;
    /* margin: 16px; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
    &:hover {
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }
`;

export const ImageContainer = styled.div`
    /* width: 300px; */
    padding: 12px;
`;

export const ProductImage = styled.img`
    width: 100%;
    object-fit: contain;
    /* border-radius: 8px; */
`;

export const ProductName = styled.h3`
    font-size: 1.5rem;
    margin: 8px 0;
    color: ${colors.black};
`;
export const ProductDesc = styled.h4`
    font-size: 1rem;
    margin: 8px 0;
    color: #333;
`;

export const ProductPrice = styled.p`
    font-size: 1.25rem;
    color: #666;
    margin: 8px 0;
`;
