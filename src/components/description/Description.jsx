import React from 'react';
import Button from '../button/button';

const Description = ({ text }) => {

  return (
    <div>
      {text}
      <Button type="button">Подробнее</Button>
    </div>
  );
}

export default Description;	