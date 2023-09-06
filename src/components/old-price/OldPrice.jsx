import React from 'react';
import { StyledOldPrice } from './styled';

const OldPrice = ({ value, className }) => {

  return <StyledOldPrice className={className}>{value}</StyledOldPrice>;
}

export default OldPrice;