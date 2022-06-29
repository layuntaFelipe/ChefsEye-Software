import React from 'react';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
import InfoBox from './InfoBox';
import {lastOrders} from '../data.js';

function Slider() {

  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <div id='main-slider-container'>
        <div id="slider">
            {lastOrders.map((slide,index)=>{
                    return(
                        <InfoBox name={slide.name} price={slide.price} time={slide.timeAgo} image={slide.image} key={index}/>
                    );
                })}
        </div>
        <MdChevronLeft className="slider-icon left" onClick={slideLeft} />
        <MdChevronRight className="slider-icon right" onClick={slideRight} />
    </div>
  )
}

export default Slider