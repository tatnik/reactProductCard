import React from 'react';
import OldPrice from './OldPrice';
import NewPrice from './NewPrice';

const FullPrice = ({oldPrice, newPrice}) => {

  const showOldPrice = Boolean(oldPrice && newPrice < oldPrice);
  
  return (
    <React.Fragment>
        {showOldPrice && <OldPrice value={oldPrice}/>}
        {showOldPrice && " "}
        <NewPrice value={newPrice}/>
    </React.Fragment>
  );
}

export default FullPrice;	