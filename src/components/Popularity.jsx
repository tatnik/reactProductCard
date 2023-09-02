import React from 'react';

const Popularyty  = ({count}) => {
  let result = null;
  if (count===0) {
    result = <p><b>Будь первым! Поделись впечатлениями.</b></p>
  }
  if (count>5) {
    result = <p style={{color: "green"}}> Проверенный товар </p>
  }
  return result;
}

export default Popularyty;