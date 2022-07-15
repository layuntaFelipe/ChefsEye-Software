import React from 'react'
import Header from '../components/Header';
import ProfitGraph from '../components/ProfitGraph';

const Manage = () => {
  return (
    <>
        <Header itemOn={1}/>
        <div className="manageContainer">
          <ProfitGraph/>
          <ProfitGraph/>
          <ProfitGraph/>
          <ProfitGraph/>
          <ProfitGraph/>
        </div>
    </>
  )
}

export default Manage