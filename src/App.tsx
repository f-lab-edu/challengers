import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Item from './pages/item/Item';
import User from './pages/user/User';
import styled from 'styled-components';
import theme from 'styles/theme';

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${theme.colors.yellow};
`;

export default App;
