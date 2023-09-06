import React from 'react';
import { StyledCounter, Value } from './styled';
import Button from '../button/button';


const Counter = () => {

  return (
    <StyledCounter>
      <Button size="small">-</Button>
      <Value>1</Value>
      <Button size="small">+</Button>
    </StyledCounter>
  );
}

export default Counter;	