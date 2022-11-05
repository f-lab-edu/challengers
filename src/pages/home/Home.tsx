import React from 'react';
import axios from 'axios';
import Button from 'components/common/Button';
import theme from 'styles/theme';
import Logo from 'components/common/Logo';

const Home = () => {
  axios
    .get('http://localhost:1337/api/challenges')
    .then((res) => console.log(res.data));

  return (
    <div>
      <h1>홈</h1>
      <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠.</p>
      <Button
        width={'7rem'}
        title="버튼 테스트"
        color={theme.colors.white}
        backgroundColor={theme.colors.red}
        onClick={() => {
          console.log(1);
        }}
      />
      <Logo />
    </div>
  );
};

export default Home;
