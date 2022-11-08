import React from 'react';
import axios from 'axios';
import Button from 'components/common/Button';
import theme from 'styles/theme';
import Logo from 'components/common/Logo';
import SearchBar from 'components/common/SearchBar';
import MakeItemButton from 'components/common/MakeItemButton';
import Navbar from 'components/common/Navbar';
import ChallengeItem from 'components/common/ChallengeItem';
import ChallengeItemList from 'components/home/ChallengeItemList';
import ChallengeTypesList from 'components/home/ChallengeTypesList';
import Board from 'components/home/Board';

const Home = () => {
  return (
    <>
      <Navbar />
      <Board />
      <ChallengeTypesList />
      <ChallengeItemList />
    </>
  );
};

export default Home;
