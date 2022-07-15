import React from 'react'
import Header from '../components/Header';
import OrdersList from '../components/OrdersList';
import ClientOrderInfo from '../components/ClientOrderInfo';

const Kitchen = () => {
  return (
    <>
        <Header itemOn={2}/>
        <div className="kitchenContainer">
          <ClientOrderInfo/>
          <OrdersList/>
        </div>
    </>
  )
}

export default Kitchen