import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import logo from '../../assets/Logo.png';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  ${theme.flex.flexBox('column', 'space-between', '')}
  position: relative;
  width: 15rem;
  height: 15rem;
  cursor: pointer;
  user-select: none;
`;

const ChallengeImg = styled.img.attrs({ src: `${logo}` })`
  border-radius: 2rem;
  background-color: ${theme.colors.darkGray};
  width: 100%;
  height: 70%;
`;

const ChallengePeriod = styled.div`
  position: absolute;
  border-radius: 0.5rem;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  top: 1rem;
  left: 1rem;
  width: 5rem;
  height: 2rem;
  padding: 0 ${theme.paddings.base};
  text-align: center;
  font-size: ${theme.fontSizes.small};
  line-height: 2rem;
`;

const ChallengeTitle = styled.div`
  width: 100%;
  height: 15%;
  padding-top: 1rem;
  padding-left: ${theme.paddings.large}; ;
`;

const ChallengeDeposit = styled.div`
  width: 100%;
  height: 15%;
  padding-top: ${theme.paddings.base};
  padding-left: ${theme.paddings.large};
  font-weight: ${theme.fontWeights.semiBold};
`;

interface ChallengeItem {
  id: number;
  title: string;
  deposit: number;
  startDate: Date;
  period: number;
}

function ChallengeItem({
  id,
  title,
  deposit,
  startDate,
  period,
}: ChallengeItem) {
  // 추후 data 받아서 남은 기간 계산하는 로직 구현
  // const current = new Date();

  const navigate = useNavigate();

  return (
    <Wrapper
      onClick={() => {
        navigate(`item/${id}`);
      }}
    >
      <ChallengeImg />
      <ChallengePeriod>{period * 7}일</ChallengePeriod>
      <ChallengeTitle>{title}</ChallengeTitle>
      <ChallengeDeposit>{deposit} 원</ChallengeDeposit>
    </Wrapper>
  );
}

export default ChallengeItem;
