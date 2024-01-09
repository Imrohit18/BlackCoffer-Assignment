import React, { useState } from 'react';

const ColorChanger = () => {
  const [colorName, setColorName] = useState(''); // Initial color name

  const changeColor = () => {
    document.body.style.backgroundColor = colorName;
  };

  return (
    <div>
      <label htmlFor="colorInput">Enter Color Name:</label>
      <input
        type="text"
        id="colorInput"
        value={colorName}
        onChange={(e) => setColorName(e.target.value)}
      />
      <button onClick={changeColor}>Change Background Color</button>
    </div>
  );
};

export default ColorChanger;
