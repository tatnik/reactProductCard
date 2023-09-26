import React from 'react';
import OldPrice from './../old-price/OldPrice';
import { Price, PriceWrapper } from './styled';

const FullPrice = ({ oldPrice, newPrice }) => {

  const showOldPrice = Boolean(oldPrice && newPrice < oldPrice);
  console.log(oldPrice, newPrice);
  return (
    <PriceWrapper>
      {showOldPrice && <OldPrice value={oldPrice} />}
      {showOldPrice && " "}
      <Price value={newPrice} />
    </PriceWrapper>
  );
}

export default FullPrice;	