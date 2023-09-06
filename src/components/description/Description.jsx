import React from 'react';
import { DescriptionButton } from './styled';

const Description = ({ text }) => {

  return (
    <div>
      {text}
      <DescriptionButton type="button">Подробнее</DescriptionButton>
    </div>
  );
}

export default Description;	