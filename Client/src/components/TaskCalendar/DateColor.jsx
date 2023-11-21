import React, {useState} from 'react';
import { HuePicker } from 'react-color';

const DateColor = ({ onUpdateColor }) => {
  const [color, setColor] = useState('#000');

  const handleColorChange = (color) => {
    setColor(color);
    onUpdateColor(color);
  };

  return (
    <HuePicker
      className='colorPicker'
      color={color}
      onColorChange={handleColorChange}
    />
  );
};

export default DateColor;