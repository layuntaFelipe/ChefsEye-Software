import React from 'react'
import Header from '../components/Header';
import ProfitGraph from '../components/ProfitGraph';
import FavDishMap from '../components/FavDishMap';
import MenuLayout from '../components/MenuLayout';
import StorageLayout from '../components/StorageLayout';


const Manage = () => {
  return (
    <>
        <Header itemOn={1}/>
        <div className="manageContainer">
          <ProfitGraph/>
          <MenuLayout/>
          <FavDishMap/>
          <StorageLayout/>
        </div>
    </>
  )
}

export default Manage