import React from 'react'
import {SliderData} from '../components/SliderData'

const  Slider = ({slides}) => {
    return(
        <div id='gallery'>
            <h1>Gallery</h1>
            <div>
                {SliderData.map((slide, index) => {
                    return <img
                    src={slide.image} alt='/' 
                    width='1440' 
                    height='600' 
                    objectFit='cover'/>
                    
                })}
            </div>
        </div>
    )
}

export default Slider