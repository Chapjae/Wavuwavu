import { useState } from 'react';

function SelectSide() {
  const [chooseSide, setSide] = useState();
  const [hoverSide, setHoverSide] = useState();

  return (
    <>
      <div
        onMouseEnter={() => setHoverSide('test')}
        onMouseLeave={() => hoverSide}
        onClick={() => setSide('LeftSide')}>
        Left Side
      </div>
      <div
        onMouseEnter={() => setHoverSide('test2')}
        onMouseLeave={() => hoverSide}
        onClick={() => setSide('RightSide')}>
        Right Side
      </div>
    </>
  );
}

export default SelectSide;
