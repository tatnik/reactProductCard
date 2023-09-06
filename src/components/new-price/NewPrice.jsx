import React from 'react';
import { StyledPrice } from './styled';

const NewPrice = ({ value, className }) => {

  return <StyledPrice className={className}>{value} ₽</StyledPrice>;

}


export default NewPrice;