import { atom } from 'recoil';

const searchTitleState = atom({
  key: 'searchTitleState',
  default: '',
});

export default searchTitleState;
