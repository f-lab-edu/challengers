import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'styles/theme';
import logo from '../../assets/logo.png';

const Wrapper = styled.div`
  ${theme.flex.flexBox('row', 'flexstart', 'center')}
`;

const StyledLogo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 3rem;
  height: 3rem;
`;

const LogoName = styled.div`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.extraBold};
`;

function Logo() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <Wrapper onClick={onClick}>
      <StyledLogo />
      <LogoName>challengers</LogoName>
    </Wrapper>
  );
}

export default Logo;
