import React from 'react'
import Header from '../components/Header';
import QRCodeSample from '../images/QRCodeSample.svg';

const QRCode = () => {
  return (
    <>
        <Header itemOn={4} />
        <img src={QRCodeSample} alt="QRCode" />
        <h3>Create QR Code</h3>
        <p>To create a unique QR code, simply write down the number of the table. In case you want to create a series of QR codes, write the number of the first table and the number of the last table.</p>
        <form action="">
            <label htmlFor="">
                First Number:
                <input type="number" name="" id="" />
            </label>
            <label htmlFor="">
                Last Number:
                <input type="number" name="" id="" />
            </label>
            <button>Create QR Code</button>
        </form>
    </>
  )
}

export default QRCode