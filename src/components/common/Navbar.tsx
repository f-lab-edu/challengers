import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import Logo from 'components/common/Logo';
import SearchBar from 'components/common/SearchBar';
import Button from 'components/common/Button';
import MakeItemButton from './MakeItemButton';
import UserInfo from './UserInfo';

const Wrapper = styled.div`
  ${theme.flex.flexBox('row', 'space-between', 'center')}
  background-color: ${theme.colors.white};
  height: 6rem;
  position: sticky;
  top: 0rem;
`;

function Navbar() {
  return (
    <Wrapper>
      <Logo />
      <SearchBar />
      <MakeItemButton />
      <UserInfo />
    </Wrapper>
  );
}

export default Navbar;
