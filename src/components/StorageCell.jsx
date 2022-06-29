import React from 'react'
import helpIcon from '../images/Help.svg';
import { HiMinus, HiPlus} from 'react-icons/hi';
import { FaDatabase } from 'react-icons/fa';

function StorageCell({sign, percentage}) {

  const isPositive = sign;

  return (
    <div className="containerCell">
        <div className="infoCellStorage">
            <img src={helpIcon} alt="" id='infoIMG' />
            <h4 style={isPositive ? {color: '#14C03A'} : {color: '#EF233C'}}>{percentage}% of storage</h4>
            <small>In the last 5 hours</small>
            <FaDatabase className='database' style={isPositive ? {color: '#14C03A'} : {color: '#EF233C'}}/>
        </div>
        {isPositive ? <HiPlus className='sign' style={{color: '#14C03A'}}/> : <HiMinus className='sign' style={{color: '#EF233C'}}/>}
    </div>
  )
}

export default StorageCell