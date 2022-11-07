import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import icons from '../../assets/icons/index';
// (예정)각 아이콘 클릭 시 정렬 기능
const {
  totalIcon,
  calendarIcon,
  barbellIcon,
  hamburgerIcon,
  heartIcon,
  paletteIcon,
  handsoapIcon,
  leafIcon,
  packageIcon,
  customIcon,
} = icons;

const Wrapper = styled.div`
  ${theme.flex.flexBox('row', 'space-between', 'center')}
`;

const TypeWrapper = styled.div`
  ${theme.flex.flexBox('column', 'flex-start', 'center')}
  cursor: pointer;
  user-select: none;
  font-size: 0.8rem;
`;

function makeIconComponent(image: string) {
  return styled.img.attrs({ src: image })`
    width: 3rem;
    height: 3rem;
  `;
}

const [
  TotalIcon,
  CalendarIcon,
  BarbellIcon,
  HamburgerIcon,
  HeartIcon,
  PaletteIcon,
  HandsoapIcon,
  LeafIcon,
  PackageIcon,
  CustomIcon,
] = [
  totalIcon,
  calendarIcon,
  barbellIcon,
  hamburgerIcon,
  heartIcon,
  paletteIcon,
  handsoapIcon,
  leafIcon,
  packageIcon,
  customIcon,
].map((icon) => makeIconComponent(icon));

interface TypeName {
  title: string;
}

function TypeName({ title }: TypeName) {
  return <div>{title}</div>;
}

function ChallengeTypesList() {
  return (
    <Wrapper>
      <TypeWrapper>
        <TotalIcon />
        <TypeName title={'전체 선택'} />
      </TypeWrapper>
      <TypeWrapper>
        <CalendarIcon />
        <TypeName title={'규칙적인 생활'} />
      </TypeWrapper>
      <TypeWrapper>
        <BarbellIcon />
        <TypeName title={'운동'} />
      </TypeWrapper>
      <TypeWrapper>
        <HamburgerIcon />
        <TypeName title={'식습관'} />
      </TypeWrapper>
      <TypeWrapper>
        <HeartIcon />
        <TypeName title={'마음챙김'} />
      </TypeWrapper>
      <TypeWrapper>
        <PaletteIcon />
        <TypeName title={'취미'} />
      </TypeWrapper>
      <TypeWrapper>
        <HandsoapIcon />
        <TypeName title={'셀프케어'} />
      </TypeWrapper>
      <TypeWrapper>
        <LeafIcon />
        <TypeName title={'에코 • 펫'} />
      </TypeWrapper>
      <TypeWrapper>
        <PackageIcon />
        <TypeName title={'이벤트'} />
      </TypeWrapper>
      <TypeWrapper>
        <CustomIcon />
        <TypeName title={'커스텀 챌린지'} />
      </TypeWrapper>
    </Wrapper>
  );
}

export default ChallengeTypesList;
