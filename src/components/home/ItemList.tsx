import React from 'react';
import styled from 'styled-components';
import ChallengeItem from 'components/common/ChallengeItem';
import theme from 'styles/theme';

const Wrapper = styled.div`
  ${theme.flex.flexBox('row', 'flex-start', 'center')}
`;

function ChallengeItemList() {
  return <Wrapper></Wrapper>;
}

export default ChallengeItemList;
