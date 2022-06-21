import React from 'react'
import graph from '../images/Graph.svg';
import graphNeg from '../images/Graph-neg.svg';
import helpIcon from '../images/Help.svg';
import '../panelStyle.css';

function ProfitCell({price, isPositive}) {
  return (
    <div className="containerCell">
        <div className="infoCell">
            <img src={helpIcon} alt="" id='infoIMG' />
            <h4 style={{color: isPositive ? '#14C03A' : '#EF233C'}}>+CAD {price}</h4>
            <small>In the last 5 hours</small>
        </div>
        <img src={isPositive ? graph : graphNeg} alt="" id='graph' />
    </div>
  )
}

export default ProfitCell