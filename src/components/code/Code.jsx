import React from 'react';
import StyledCode from './styled';

const Code = ({ children }) => {

  return (
    <StyledCode>Артикул: {children}</StyledCode>
  );
}

export default Code;