import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/MagnifyingGlass.png';
import theme from 'styles/theme';
import { useRecoilState } from 'recoil';
import searchTitleState from 'store/state/atom';

const Label = styled.label`
  background-color: ${theme.colors.lightGray};
  height: 3rem;
  width: 25rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  ${theme.flex.flexBox('row', 'space-between', 'center')}
  input {
    border: none;
    width: 100%;
    font-size: ${theme.fontSizes.base};
    font-weight: ${theme.fontWeights.semiBold};
    background-color: ${theme.colors.lightGray};
    ::placeholder {
      color: ${theme.colors.black};
    }
    :focus {
      outline: none;
    }
  }
  button {
    border: none;
    background-color: ${theme.colors.lightGray};
    cursor: pointer;
  }
`;

function SearchBar() {
  const [searchTitle, setSearchTitle] = useRecoilState(searchTitleState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  const onClick = () => {
    console.log(searchTitle);
  };

  return (
    <Label>
      <input placeholder="검색어를 입력해주세요" onChange={onChange} />
      <button onClick={onClick}>
        <img src={searchIcon} />
      </button>
    </Label>
  );
}

export default SearchBar;
