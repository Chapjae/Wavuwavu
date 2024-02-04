import React from 'react';

const Practice = ({ selectedSide }) => {
  const sideInfo = {
    Left: {
      images: ['f.svg', 'n.svg', 'd.svg', 'df.svg'],
    },
    Right: {
      images: ['b.svg', 'n.svg', 'd.svg', 'db.svg'],
    },
  };

  const { images } = sideInfo[selectedSide] || {};

  return (
    <>
      <p>Your inputs are for the {selectedSide} side</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '15%',
          height: '15%',
        }}>
        {images &&
          images.map((imageName, index) => (
            <img key={index} src={`/inputs/${imageName}`} alt={imageName} />
          ))}
      </div>
    </>
  );
};

export default Practice;
