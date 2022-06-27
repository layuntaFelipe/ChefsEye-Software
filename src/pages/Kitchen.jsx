import React from 'react'
import Header from '../components/Header'

const Kitchen = () => {
  return (
    <>
        <Header itemOn={2}/>
        <div className="infoDish">
            <div className="">
                <h5>Create New Dish</h5>
            </div>
            <div className="dishSlides" id='dishScroll'>
                <div className="cell"></div>
            </div>
        </div>
        <div className="dishContainer">
            <div className="">
                <h5>Dish Info</h5>
            </div>
        </div>
    </>
  )
}

export default Kitchen