import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

const StyledButton = styled.button<StyledButton>`
  padding: 0.5rem 1rem;
  width: ${(props) => props.width};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.extraBold};
  background-color: ${(props) => props.color};
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

interface StyledButton {
  width: string;
  color: string;
}

interface Button {
  width: string;
  title: string;
  color: string;
  onClick: () => void;
}

function Button({ width, title, color, onClick }: Button) {
  return (
    <StyledButton width={width} color={color} onClick={onClick}>
      {title}
    </StyledButton>
  );
}

export default Button;
