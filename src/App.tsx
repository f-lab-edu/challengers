import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Item from './pages/item/Item';
import User from './pages/user/User';
import styled from 'styled-components';
import theme from 'styles/theme';
import { useQuery } from 'react-query';
import axios from 'axios';

function App() {
  const result = useQuery(['challenges'], () =>
    axios.get('http://localhost:1337/api/challenges').then((res) => res.data)
  );
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <>
        {result.isLoading && '로딩'}
        {result.error && '에러'}
        {/* {result.data && result} */}
      </>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* 추후 white로 변경 */
  background-color: ${theme.colors.white};
  padding: 0 3rem;
`;

export default App;
