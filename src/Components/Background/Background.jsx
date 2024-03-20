import React from 'react'
import './Background.css' 
import video1 from '../../assets/video1.mp4'
import photo1 from '../../assets/photo1.jpg'
import photo2 from '../../assets/photo2.jpg'
import photo3 from '../../assets/photo3.jpg' 


export const Background = ({playStatus, heroCount}) => {

    if (playStatus) {
      return (
        <video className='background fade-in' alt='a video of musicians singing and driving around in a Rolls Royce' muted autoPlay loop>
          <source src={video1} type='video/mp4' />
        </video> 
      )
    }
    else if (heroCount === 0) {
      return <img src={photo1} alt='a picture of a silver/brown Rolls Royce 1985 Camargue' className='background fade-in' />
    }
    else if (heroCount === 1) {
      return <img src={photo2} alt='a picture of a purple McLaren 675 LT' className='background fade-in' />
    } 
    else if (heroCount === 2) {
      return <img src={photo3} alt='a picture of a pink Rolls Royce Cullinan' className='background fade-in' />
    }

}
