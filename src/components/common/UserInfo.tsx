import React from 'react';
import styled from 'styled-components';
import user from '../../assets/User.png';
import { useNavigate } from 'react-router-dom';

const StyledUserInfo = styled.img.attrs({ src: `${user}` })`
  width: 2rem;
  cursor: pointer;
`;

function UserInfo() {
  const navigate = useNavigate();
  return <StyledUserInfo onClick={() => navigate('/user')} />;
}

export default UserInfo;
