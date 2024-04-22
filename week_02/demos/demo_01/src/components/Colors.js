import React, {useState} from 'react'
import Color from './Color';

export default function Colors() {
  const [listColors, setListColors] = useState(['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)']);
  const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  };
  const handleClick = () => {
    const newColor = generateRandomColor();
    setListColors((prev) => [...prev, newColor]);
  };
  return (
    <div>
      <button onClick={handleClick}>Add Random color</button>
      {
        listColors.map((color, index) => {
          return <Color key={index} color={color} />
        })
      }
    </div>
  )
}
