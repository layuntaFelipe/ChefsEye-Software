import { React, useState } from 'react';
import { userProfitArray } from '../data.js';
import { Chart as ChartJS} from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const ProfitGraph = () => {

  const [userData, setUserData] = useState({
    labels: userProfitArray.map((data) => data.id),
    datasets: [{
      label: "Profit per day",
      data: userProfitArray.map((data) => data.userGain),
      backgroundColor: "#14c03a",
      borderColor: "rgb(20, 192, 58, 0.4)",
      borderWidth: 3,
      borderRadius: 6,
    },{
      label: "Lost per day",
      data: userProfitArray.map((data) => data.userLost),
      backgroundColor: "#ef233c",
      borderColor: "rgb(239, 35, 60, 0.4)",
      borderWidth: 3,
      borderRadius: 6,
    }],
  })

  return (
    <div className='manageBoxContainer'>
     <h3>Profit Graph</h3>
     <div className='manageBoxLayout'>
      <div className="sideBarProducts">
        <h4>Most Profitable Products</h4>
        <div className="orderInfoCell profitableItem"></div>
        <div className="orderInfoCell profitableItem"></div><hr/>
        <h4>Last Profitable Products</h4>
        <div className="orderInfoCell nonProfitableItem"></div>
      </div>
      <div className='chartBox'>
        <Bar className='barStyle' data={userData} options={{aspectRatio: 1.75}} />
      </div>
     </div>
    </div>
  )
}

export default ProfitGraph