import styled from 'styled-components';
import { colors } from '../constants';

export const ProductItemContainer = styled.div`
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
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