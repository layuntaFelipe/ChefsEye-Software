import React from 'react'
import graph from '../images/Graph.svg';
import helpIcon from '../images/Help.svg';
import '../panelStyle.css';

function ManageCell() {
  return (
    <div className="containerCell">
        <div className="infoCell">
            <img src={helpIcon} alt="" id='infoIMG' />
            <h4>+CAD 543.99</h4>
            <small>In the last 5 hours</small>
        </div>
        <img src={graph} alt="" id='graph' />
    </div>
  )
}

export default ManageCell