import React from 'react'

function InfoBox({name, price, time, image}) {
  return (
    <div className="containerInfo">
        <div className="info">
            <h3>{name}</h3>
            <h2>+${price}</h2>
            <small>{time} seconds ago</small>
        </div>
        <img src={image} alt={name} />
    </div>
  )
}

export default InfoBox;