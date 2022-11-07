import React from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
  const { id } = useParams();
  console.log(id);
  // 추후 id에 맞는 아이템을 찾아서 view 보여주기
  return (
    <div>
      <h1>아이템</h1>
      <p>챌린지 아이템을 하나하나 구경할 수 있는 페이지입니다.</p>
    </div>
  );
};

export default Item;
