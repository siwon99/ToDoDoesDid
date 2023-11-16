import React, {useState} from 'react';
import { HuePicker } from 'react-color';

const ColorButton = ({ onUpdateColor }) => {
  const [color, setColor] = useState('#000');

  const handleColorChange = (color) => {
    setColor(color);
    onUpdateColor(color);

    document.body.style.backgroundColor = color.hex;
  };

  return (
    <HuePicker
      className='colorPicker'
      color={color}
      onColorChange={handleColorChange}
    />
  );
};

export default ColorButton;