import React from 'react';
import MenuCell from './MenuCell';
import { lastOrders } from '../data';

const FavDishMap = () => {
  return (
   <>
    <div className="manageBoxContainer">
      <h3>Favourite Dish &amp; Map</h3>
      <div className="manageBoxLayout">
      <div className="favFoodSide">
          <h4>Favourite Dish Overall</h4>
          <div className="cellsDish">
            <MenuCell name={lastOrders[0].name} price={lastOrders[0].price} image={lastOrders[0].image}/>
          </div><hr/>
          <h4>Favourite Main Course</h4>
          <div className="cellsDish">
            <MenuCell name={lastOrders[3].name} price={lastOrders[3].price} image={lastOrders[3].image}/>
            <MenuCell name={lastOrders[0].name} price={lastOrders[0].price} image={lastOrders[0].image}/>
          </div><hr/>
        </div>
        <div className="manageMap">
          <div className="table">1</div>
          <div className="table currentOccupeid">2</div>
          <div className="table mostActive">3</div>
          <div className="table mostActive">4</div>
          <div className="table currentOccupeid">5</div>
          <div className="table">6</div>
          <div className="table">7</div>
          <div className="table">8</div>
          <div className="table currentOccupeid">9</div>
          <div className="table mostActive">10</div>
          <div className="table">11</div>
          <div className="table currentOccupeid">12</div>
          <div className="table mostActive">13</div>
          <div className="table">14</div>
          <div className="table">15</div>
        </div>
      </div>
    </div>
   </>
  )
}

export default FavDishMap