import React from 'react'
import arrowDown from '../images/arrowDown.svg';
import ProfitCell from './ProfitCell';
import MenuCell from './MenuCell';
import StorageCell from './StorageCell';
import PropTypes from 'prop-types';
import {storageArray, menuArray, lastProfitArray} from '../data.js';

function ManageBox({bgColor, titleBGColor, title, titleColor, type, number}) {
  const slides = [];
  for (let i = 0; i < number; i++) {
    slides.push(i);
  }
  let outputCell;

  return (
    <div className="containerManage" style={{backgroundColor: bgColor}}>
        <div className="titleContainer" style={{backgroundColor: titleBGColor}}>
            <h5 style={{color: titleColor}}>{title}</h5>
        </div>
        <div className="manageSlides" id='manageScroll'>
          {slides.map((slide,index)=>{
            switch (type) {
              case 1:
                outputCell = <ProfitCell price={lastProfitArray[index].value} isPositive={lastProfitArray[index].isPositive} key={index}/>;
                break;
              case 2:
                outputCell = <MenuCell name={menuArray[index].name} price={menuArray[index].price} image={menuArray[index].image} key={index}/>;
                break;
              case 3:
                outputCell = <StorageCell key={index} sign={storageArray[index].isPositive} percentage={storageArray[index].value}/>;
                break;
              default:
                outputCell = <ProfitCell key={index}/>;
                break;
            }
            return(outputCell);
          })}
        </div>
        <img src={arrowDown} alt="" id='arrowDown' />
    </div>
  )
}

ManageBox.defaultProps = {
  bgColor: '#8D99AE',
  titleBGColor: '#ECEFF0',
  title: 'Last Profit',
  titleColor: 'black',
  type: 1,
}

ManageBox.propTypes = {
  bgColor: PropTypes.string,
  titleBGColor: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  type: PropTypes.number,
}

export default ManageBox