import React from 'react';
import styled from 'styled-components';
import ChallengeItem from 'components/common/ChallengeItem';
import theme from 'styles/theme';

const Wrapper = styled.div`
  ${theme.flex.flexBox('row', 'flex-start', 'center')}
  flex-wrap: wrap;
`;

// ChallengeItem 변수
// id,
// title,
// deposit,
// startDate,
// period,

const MockData = [
  {
    id: 0,
    title: '물 한 잔 마시기',
    deposit: 100,
    startDate: '2202-11-07',
    period: 2,
  },
  {
    id: 1,
    title: '6시 기상하기',
    deposit: 300,
    startDate: '2202-11-07',
    period: 3,
  },
  {
    id: 2,
    title: '방 청소하기',
    deposit: 100,
    startDate: '2202-11-07',
    period: 2,
  },
  {
    id: 3,
    title: '하늘 한 번 보기',
    deposit: 100,
    startDate: '2202-11-07',
    period: 4,
  },
  {
    id: 4,
    title: '반려동물과 산책하기',
    deposit: 200,
    startDate: '2202-11-07',
    period: 3,
  },
  {
    id: 5,
    title: '3km 달리기',
    deposit: 500,
    startDate: '2202-11-07',
    period: 1,
  },
  {
    id: 6,
    title: '향수 뿌리기',
    deposit: 100,
    startDate: '2202-11-07',
    period: 2,
  },
];

function ChallengeItemList() {
  return (
    <Wrapper>
      {MockData.map((item) => (
        <ChallengeItem
          id={item.id}
          title={item.title}
          deposit={item.deposit}
          startDate={new Date(item.startDate)}
          period={item.period}
          key={item.id}
        />
      ))}
    </Wrapper>
  );
}

export default ChallengeItemList;
