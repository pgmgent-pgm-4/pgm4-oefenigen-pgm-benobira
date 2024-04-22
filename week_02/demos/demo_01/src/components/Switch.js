// Maak een Switch component waarmee het licht aan- en uit kan gezet worden. De achtergrondkleur van het body element kan aangepast worden via document.body.style.backgroundColor = '#fff'.

import React, { useState } from 'react'

export default function Switch() {
    const [switchLights, setSwitchLights] = useState('#fff');
    const handleClick = () => setSwitchLights((prevSwitchLights) => prevSwitchLights === '#fff' ? '#000' : '#fff');
    document.body.style.backgroundColor = switchLights;
  return (
    <div>
        <button onClick={handleClick}>Switch lights on / off</button>
    </div>
  )
}
