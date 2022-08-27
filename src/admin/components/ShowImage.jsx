import React from 'react';
import Image from './Image';

const ShowImage = ({ images }) => {
  const show = (image) => {
    return <Image image={image} />;
  };
  return <div className="flex flex-col items-center">
    <div className="w-[25%] ">{images.map(show)}</div>
    </div>;
};
export default ShowImage;