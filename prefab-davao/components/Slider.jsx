import Image from 'next/Image'
import React, { useState } from 'react'
import {SliderData} from '../components/SliderData'

const  Slider = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length
    
    return(
        <div id='gallery'>
         
            <div>
                {SliderData.map((slide, index) => {
                    return (
                        <div key={index} className=''>
                            <img
                            src={slide.image}
                            alt='/' 
                            width='1440'
                            height='600'
                            objectFit='cover'
                            />  
                        </div>

                    );
                })}
            </div>
        </div>
    )
}

export default Slider