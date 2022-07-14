import React from 'react'
import Header from '../components/Header'
import MenuCell from '../components/MenuCell'
import {menuArray} from '../data.js'
import { FaPlus } from 'react-icons/fa';

const Menu = () => {

    const handleClick = () => {
        console.log('Hello');
    }

  return (
    <>
        <Header itemOn={3} />
        <div className="menuContainer">
            <div className="dishContainer">
                <div className="titleDish">
                    <h5>Create New Dish</h5>
                    <FaPlus id='addDishBtn' onClick={handleClick} />
                </div>
                <div className="dishSlides manageSlides" id='dishScroll'>
                    {
                        menuArray.map((item, index) => {
                            return <MenuCell name={menuArray[index].name} price={menuArray[index].price} image={menuArray[index].image} key={index}/>;
                        })
                    }
                </div>
            </div>
            <div className="infoDish">
                <div className="titleInfo">
                    <h5>Dish Info</h5>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Menu