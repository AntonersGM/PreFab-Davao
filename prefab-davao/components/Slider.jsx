import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const  Slider = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
}

const previousSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1)
}

if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
}
    
    return(
        <div id='gallery'>
         
            <div>
                {SliderData.map((slide, index) => {
                    return (
                        <div key={index} className={index === current 
                            ? 'opacity-[1] ease in duration-1000' 
                            : 'opacity-0'
                             }
                        >
                            <div className='relative flex justify-center p-4'>


                            <FaArrowCircleLeft 
                            onClick={previousSlide}
                            className='absolute top-[50%] left-[30px]
                             text-white/70 cursor-pointer select-none z-[2]' size={50}
                             />
                           {index === current && (
                             <img
                             src={slide.image}
                             alt='/' 
                             objectFit='cover'
                             />  
                             
                           )}

                            <FaArrowCircleRight 
                            onClick={nextSlide}
                            className='absolute top-[50%] right-[30px]
                             text-white/70 cursor-pointer select-none z-[2]' size={50}
                             />
                             </div>
                        </div>

                    );
                })}
            </div>
        </div>
    )
}

export default Slider