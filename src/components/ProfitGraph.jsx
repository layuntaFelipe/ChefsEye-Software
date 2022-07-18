import { React, useState } from 'react';
import { userProfitArray } from '../data.js';
import { Chart as ChartJS} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const ProfitGraph = () => {

  const [userData, setUserData] = useState({
    labels: userProfitArray.map((data) => data.id),
    datasets: [{
      label: "Profit per day",
      data: userProfitArray.map((data) => data.userGain - data.userLost),
      backgroundColor: userProfitArray.map((data) => (data.userGain-data.userLost)<0 ? "#ef233c" : "#14c03a"),
      borderColor: userProfitArray.map((data) => (data.userGain-data.userLost)<0 ? "rgb(239, 35, 60, 0.4)" : "rgb(20, 192, 58, 0.4)"),
      borderWidth: 3,
      borderRadius: 6,
    }],
  })

  return (
    <div className='manageBoxContainer'>
     <h3>Profit Graph</h3>
     <div className='manageBoxLayout'>
      <div>
        <Line className='barStyle' data={userData} />
      </div>
     </div>
    </div>
  )
}

export default ProfitGraph