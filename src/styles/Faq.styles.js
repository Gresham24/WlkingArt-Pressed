import styled from "styled-components";

export const StyledPageContainer = styled.div`
  max-width: 970px;
  margin: 100px auto;
  padding: 50px;
`;

export const StyledFaqTitle = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
`;

export const StyledAccordionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledAccordionItem = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const StyledQuestionButton = styled.button`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8f8f8;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color:rgb(231, 231, 231);
  }

  &:focus {
    outline: none;
    background-color: #f8f8f8;
  }
`;

export const StyledIconWrapper = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${({ isExpanded }) => isExpanded ? 'rotate(180deg)' : 'rotate(0)'};
`;

export const StyledAnswerContainer = styled.div`
  padding: ${({ isExpanded }) => isExpanded ? '20px' : '0 20px'};
  background-color: white;
  line-height: 1.6;
  color: #666;
  max-height: ${({ isExpanded }) => isExpanded ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;