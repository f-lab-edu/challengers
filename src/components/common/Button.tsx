import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

const StyledButton = styled.button<StyledButton>`
  padding: 0.5rem 1rem;
  width: ${(props) => props.width};
  height: 2rem;
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.extraBold};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
`;

interface StyledButton {
  width: string;
  backgroundColor: string;
  color: string;
}

interface Button {
  width: string;
  title: string;
  backgroundColor: string;
  color: string;
  onClick: () => void;
}

function Button({ width, title, backgroundColor, color, onClick }: Button) {
  return (
    <StyledButton
      width={width}
      backgroundColor={backgroundColor}
      color={color}
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
}

export default Button;
