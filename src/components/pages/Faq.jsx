import { useState } from "react";
import {
  StyledPageContainer,
  StyledFaqTitle,
  StyledAccordionContainer,
  StyledAccordionItem,
  StyledQuestionButton,
  StyledIconWrapper,
  StyledAnswerContainer,
} from '../../styles/Faq.styles';

const faqData = [
  {
    id: 'question1',
    question: 'How long do the sets last?',
    answer: 'They last +- 2 weeks and are reusable up to 3 times with proper care and application.'
  },
  {
    id: 'question2',
    question: 'Can I do regular stuff like wash dishes etc. with them on?',
    answer: 'Yes you can.'
  },
  {
    id: 'question3',
    question: 'Will the glue damage my nail bed?',
    answer: 'The glue does not damage your nail bed. Pulling out your press-on\'s instead of proper removal will result in a damaged nail bed.'
  },
  {
    id: 'question4',
    question: 'How do I remove them?',
    answer: 'Soak your nails in warm, soapy water (add oil as well) for 10–15 minutes. Gently lift the nails off, avoiding force.'
  }
];

const FaqAccordion = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (questionId) => {
    setExpanded(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <StyledPageContainer>
      <StyledFaqTitle>Frequently Asked Questions</StyledFaqTitle>
      <StyledAccordionContainer>
        {faqData.map(({ id, question, answer }) => (
          <StyledAccordionItem key={id}>
            <StyledQuestionButton
              onClick={() => toggleExpanded(id)}
              aria-expanded={expanded[id]}
              aria-controls={`answer-${id}`}
            >
              {question}
              <StyledIconWrapper isExpanded={expanded[id]}>
                ▼
              </StyledIconWrapper>
            </StyledQuestionButton>
            <StyledAnswerContainer
              id={`answer-${id}`}
              isExpanded={expanded[id]}
              role="region"
              aria-labelledby={`question-${id}`}
            >
              {answer}
            </StyledAnswerContainer>
          </StyledAccordionItem>
        ))}
      </StyledAccordionContainer>
    </StyledPageContainer>
  );
};

export default FaqAccordion;