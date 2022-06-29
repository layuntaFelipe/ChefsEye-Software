import React from 'react'

function MenuCell({name, price, image}) {
  return (
    <div className="menuCell">
        <div className="infoCellProfit">
            <h4 id='cellName'>{name}</h4>
            <small id='cellDesc'>This is a description of this product and thus it does</small>
            <h5 id='cellPrice'>CAD {price}</h5>
        </div>
        <img src={image} alt="" id='food' />
    </div>
  )
}

export default MenuCell