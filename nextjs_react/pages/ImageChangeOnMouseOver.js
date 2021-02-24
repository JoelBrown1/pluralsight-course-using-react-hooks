import React from 'react';
import ImageToggleOnMouseOver from '../components/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver primaryImg="/static/bw/Speaker-187.jpg" secondaryImg="/static/color/Speaker-187.jpg" alt="" />
      <ImageToggleOnMouseOver primaryImg="/static/bw/Speaker-823.jpg" secondaryImg="/static/color/Speaker-823.jpg" alt="" />
    </div>
  );
};

export default ImageChangeOnMouseOver;
