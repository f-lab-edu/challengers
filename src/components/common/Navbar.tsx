import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import Logo from 'components/common/Logo';
import SearchBar from 'components/common/SearchBar';
import Button from 'components/common/Button';
import MakeItemButton from './MakeItemButton';

const Wrapper = styled.div`
  ${theme.flex.flexBox('row', 'space-around', 'center')}
`;

function Navbar() {
  return (
    <Wrapper>
      <Logo />
      <SearchBar />
      <MakeItemButton />
    </Wrapper>
  );
}

export default Navbar;
