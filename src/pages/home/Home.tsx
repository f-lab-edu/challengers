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

const Home = () => {
  return (
    <>
      {/* <Button
        width={'7rem'}
        title="버튼 테스트"
        color={theme.colors.white}
        backgroundColor={theme.colors.red}
        onClick={() => {
          console.log(1);
        }}
      /> */}
      {/* <ChallengeItem
        id={1}
        title={'물 한 잔 마시기'}
        deposit={200}
        startDate={new Date()}
        period={2}
      ></ChallengeItem> */}
      <Navbar />
      <ChallengeTypesList />
      <ChallengeItemList />
    </>
  );
};

export default Home;
