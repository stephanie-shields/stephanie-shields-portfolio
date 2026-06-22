import * as React from 'react';
import * as processGraphicStyles from './ProcessGraphic.module.scss';

function ProcessGraphic() {
  const arrayOfShapes = Array.from({ length: 35 }, (_, index) => index + 1);

  const backgroundSpecificNumbers = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 21, 23, 29, 33];

  const borderSpecificNumbers = [5, 20, 25, 31, 35];

  const getClassForBackground = (number) => {
    if (backgroundSpecificNumbers.includes(number)) {
      return "bg-transparent";
    }
    return "";
  };

  const getClassForBorder = (number) => {
    if (borderSpecificNumbers.includes(number)) {
      return "rounded-circle";
    }
    return "";
  };

  return (
    <div className={`${processGraphicStyles.processGraphic}`}>
      {arrayOfShapes.map((number) => (
        <div key={number} className={`${getClassForBackground(number)} ${getClassForBorder(number)} ${processGraphicStyles.processGraphicShape}`}>
        </div>
      ))}
    </div>
  )
}

export default ProcessGraphic;
