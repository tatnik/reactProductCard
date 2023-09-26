import React from 'react';
import { StyledCounter, Value } from './styled';
import Button from '../button/button';


const Counter = ({ value, onChange, minValue }) => {
  const isMinusDisabled = (value === minValue);
  return (
    <StyledCounter>
      <Button
        size="small"
        disabled={isMinusDisabled}
        onClick={() => onChange && onChange(value - 1)}>
        -
      </Button>
      <Value
        value={value}
        size={1}
        onChange={(e) => {
          const value = Number(e.target.value);
          onChange(value < minValue ? minValue : value);
        }}
      />
      <Button size="small" onClick={() => onChange && onChange(value + 1)}>+</Button>
    </StyledCounter>
  );
}

export default Counter;	