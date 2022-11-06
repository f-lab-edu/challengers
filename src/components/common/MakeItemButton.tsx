import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import theme from 'styles/theme';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled(Button)``;

function MakeItemButton() {
  const navigate = useNavigate();

  return (
    <Wrapper
      title="+ 챌린지 생성"
      width="8rem"
      backgroundColor={theme.colors.red}
      color={theme.colors.white}
      onClick={() => navigate('/create')}
    />
  );
}

export default MakeItemButton;
