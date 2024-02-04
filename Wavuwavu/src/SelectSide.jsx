import { useState } from 'react';
import Practice from './Practice';

function SelectSide() {
  const [selectedSide, setSelectedSide] = useState(null);

  const handleSelectSide = (side) => {
    setSelectedSide(side);
    console.log(side);
  };

  return (
    <div>
      <div>
        <p>Choose a side:</p>
        <div onClick={() => handleSelectSide('Left')}>Left</div>
        <div onClick={() => handleSelectSide('Right')}>Right</div>
      </div>
      {selectedSide && <Practice selectedSide={selectedSide} />}
    </div>
  );
}

export default SelectSide;
