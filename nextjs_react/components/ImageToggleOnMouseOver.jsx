import React, { useRef} from 'react'

const ImageToggleOnMouseOver = (props) => {
  let renderedImg = props.primaryImg;
  const imageRef = useRef(null);

  const handleMouseOver = (evt) => {
    imageRef.current.src = props.secondaryImg;
  }

  const handleMouseOut = (evt) => {
    imageRef.current.src = props.primaryImg;
  }

  return (
      <img 
        ref={imageRef}
        src={props.primaryImg} 
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut} 
        alt='' 
      />
  )
}

export default ImageToggleOnMouseOver
