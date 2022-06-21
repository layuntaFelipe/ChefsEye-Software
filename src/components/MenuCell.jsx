import React from 'react'
import '../panelStyle.css';

function MenuCell({name, price, image}) {
  return (
    <div className="containerCell">
        <div className="infoCellProfit">
            <h4>{name}</h4>
            <small>This is a description of this product and thus it does</small>
            <h5>CAD {price}</h5>
        </div>
        <img src={image} alt="" id='food' />
    </div>
  )
}

export default MenuCell