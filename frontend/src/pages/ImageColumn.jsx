import React from 'react';

function ImageColumn() {
  return (
    <div className="flex flex-col items-center">
      <img className="h-4 w-screen my-4" src="/asset/newLogo1.jpg" alt="Image 1" />
      <img className="h-4 w-screen my-4" src="/asset/newLogo2.jpg" alt="Image 2" />
      <img className="h-4 w-screen my-4" src="/asset/newLogo3.jpg" alt="Image 3" />
      <img className="h-4 w-screen my-4" src="/asset/newLogo4.jpg" alt="Image 4" />
    </div>
  );
}

export default ImageColumn;
