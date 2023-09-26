import React from 'react';
import { DescriptionButton } from './styled';

const Description = ({ text, onShowMore, isShowAllDescription }) => {

  return (
    <div>
      {text}
      <DescriptionButton
        onClick={onShowMore}
        type="button">
        {isShowAllDescription ? "Скрыть" : "Подробнее"}</DescriptionButton>
    </div>
  );
}

export default Description;	