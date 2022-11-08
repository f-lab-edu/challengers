import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import logo from '../../assets/Logo.png';
import Button from '../common/Button';

// Home 화면에서 여러개의 challenge가 보이는 보드

const BoardLeft = styled.img.attrs({ src: `${logo}` })`
  width: 50%;
  height: 14rem;
`;

const BoardRight = styled.div`
  width: 50%;
  height: 14rem;
  background-color: ${theme.colors.darkGray};
  ${theme.flex.flexBox('column', 'space-evenly', 'flex-start')}
  padding-left: ${theme.paddings.xxl};
`;

const Wrapper = styled.div`
  ${theme.flex.flexBox('row', 'center', 'center')}
  position: sticky;
  top: 6rem;
  cursor: pointer;
  user-select: none;
`;

const ButtonWrapper = styled.div`
  ${theme.flex.flexBox('row', 'space-around', 'center')}
  width: 50%;
`;

const ChallengeTitle = styled.h1`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.titleSize};
`;

// 추후 데이터 가져와서 넣기
function Board() {
  return (
    <Wrapper onClick={() => console.log('Board입니다.')}>
      <BoardLeft />
      <BoardRight>
        <ChallengeTitle>물 2L 마시기</ChallengeTitle>
        <ButtonWrapper>
          <Button
            width={'7rem'}
            title="5일 남음"
            color={theme.colors.black}
            backgroundColor={theme.colors.lightGray}
            onClick={() => {
              return;
            }}
          />
          <Button
            width={'7rem'}
            title="500원"
            color={theme.colors.black}
            backgroundColor={theme.colors.lightGray}
            onClick={() => {
              return;
            }}
          />
        </ButtonWrapper>
      </BoardRight>
    </Wrapper>
  );
}

export default Board;
