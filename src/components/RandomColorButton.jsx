import { useState } from "react";

const RandomColorButton = () => {
  const [color, setColor] = useState("tomato");

  const generateColor = () => {
    const newColor = `rgb(${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)})`;

    setColor(newColor);
  };

  return (
    <button
      onClick={generateColor}
      style={{
        backgroundColor: color,
        padding: 15,
        borderRadius: 10,
      }}
    >
      Changer de couleur
    </button>
  );
};

export default RandomColorButton;
