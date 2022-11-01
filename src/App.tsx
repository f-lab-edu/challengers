import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Item from './pages/item/Item';
import User from './pages/user/User';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/item" element={<Item />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.red};
`;
