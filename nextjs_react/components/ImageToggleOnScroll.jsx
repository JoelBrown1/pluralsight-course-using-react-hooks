import React, { useEffect, useRef, useState} from 'react'

const ImageToggleOnScroll = (props) => {
  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  const scrollHandler = () => {
    setInView(isInView());
  }

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  useEffect(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, []) // empty array - only run when the component is mounted the first time


  return (
      <img 
        ref={imageRef}
        src={isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
          : inView 
          ? props.secondaryImg 
          : props.primaryImg}  
        alt='' 
      />
  )
}

export default ImageToggleOnScroll
