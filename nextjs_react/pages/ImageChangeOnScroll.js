import React, { useEffect, useState } from 'react'
import ImageToggleOnScroll from '../components/ImageToggleOnScroll'

const ImageChangeOnScroll = () => {
  const [currentSpeakerID, setCurrentSpeakerID] = useState(0);
  const [mouseCount, setMouseCount] = useState(0)

  useEffect(() => {
    window.document.title = currentSpeakerID;
    console.log(`set the window title to ${currentSpeakerID}`);
    return () => {
      console.log('clean up the side effect when imageChangeOnScroll is unmounted');
    }
  }, [currentSpeakerID]) // no array of dependencies means the effect will run every time the component renders

  const renderImageContainer = (arr) => {
    return arr.map((speakerID => {
      return (
        <div 
          onMouseOver={(evt) => {
            evt.stopPropagation();
            evt.preventDefault();
            setCurrentSpeakerID(speakerID);
            setMouseCount(mouseCount + 1)
          }}
          onMouseOut={() => {
            console.log('we moused out of: ', speakerID);
          }}
          key={speakerID}
        >
          <ImageToggleOnScroll 
            primaryImg={`/static/bw/Speaker-${speakerID}.jpg`}
            secondaryImg={`/static/color/Speaker-${speakerID}.jpg`}
            alt="" 
          />
        </div>
      )
    }))
  }

  return (
    <div>
    <span>{mouseCount}</span>
      {renderImageContainer([1124,187,823,1269, 1530])}
    </div>
  )
}

export default ImageChangeOnScroll
