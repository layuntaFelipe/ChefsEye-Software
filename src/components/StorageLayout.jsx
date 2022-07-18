import { React, useState } from 'react';
import { userStorageArray } from '../data';
import { Chart as ChartJS} from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const StorageLayout = () => {

  const [ storageList, setStorageList ] = useState({
    labels: userStorageArray.map((data) => data.id),
    datasets: [
      {
        label: "% of Storage Gained",
        data: userStorageArray.map((data) => data.storageReload),
        backgroundColor: "#14c03a",
        borderColor: "rgb(20, 192, 58, 0.4)",
        borderWidth: 3,
        borderRadius: 6,
      },
      {
        label: "% of Storage Lost",
        data: userStorageArray.map((data) => data.storageLost),
        backgroundColor: "#ef233c",
        borderColor: "rgb(239, 35, 60, 0.4)",
        borderWidth: 3,
        borderRadius: 6,
      },
    ]
  });


  return (
    <>
      <div className="manageBoxContainer">
        <h3>Storage Management</h3>
        <div className="manageBoxLayout">
          <div className="sideBarProducts">
            <h4>Items Reload</h4>
            <div className="orderInfoCell profitableItem"></div>
            <div className="orderInfoCell profitableItem"></div><hr/>
            <h4>Items Lost</h4>
            <div className="orderInfoCell nonProfitableItem"></div>
          </div>
          <div className='chartBox'>
            <Bar className='barStyle' data={storageList} options={{aspectRatio: 1.75}} />
          </div>
        </div>
      </div>
    </>
  )
}

export default StorageLayout