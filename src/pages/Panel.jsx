import React from 'react';
import '../App.css';
import Header from '../components/Header';
import ManageBox from '../components/ManageBox';
import Slider from '../components/Slider';
import { storageArray } from '../data.js';

const Panel = () => {
  return (
    <>
        <Header itemOn={0} />
        <Slider />
        <div className='mainBody'>
            <ManageBox type={1} number={6} />
            <ManageBox bgColor='#ECEFF0' titleBGColor='#8D99AE' title='Menu Preview' titleColor='#FFFFFF' type={2} number={5} />
            <ManageBox title='Storage History' type={3} number={storageArray.length} />
        </div>
    </>
  )
}

export default Panel