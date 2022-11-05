import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'styles/theme';
const StyledLogo = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/assets/logo.png`,
})`
  width: 3rem;
  height: 3rem;
`;

const Wrapper = styled.div`
  ${theme.flex.flexBox('row', 'flexstart', 'center')}
`;

function Logo() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <Wrapper onClick={onClick}>
      <StyledLogo />
      <div style={{ fontSize: '1.5rem', fontWeight: '900' }}>challengers</div>
    </Wrapper>
  );
}

export default Logo;
