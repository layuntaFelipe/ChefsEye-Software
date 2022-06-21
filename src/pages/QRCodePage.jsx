import React from 'react'
import Header from '../components/Header';
import QRCode from 'qrcode';
import {useState} from 'react'
import '../styles/qrcode.css';

const QRCodePage = () => {

  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, (err, url) => {
      if(err) return console.error(err);

      console.log(url);
      setQrcode(url);
    })
  }

  return (
    <>
        <Header itemOn={4} />
        <div className="containerQR clearfix">
          <img src={qrcode} alt='your QRCode' id='qrcodeIMG' />
          <div className="QRInfo clearfix">
            <h3>Create QR Code</h3>
            <p>To create a unique QR code, simply write down the number of the table. In case you want to create a series of QR codes, write the number of the first table and the number of the last table.</p>
            <label htmlFor="">
                First Number:
                <input type="text" placeholder='test' value={url} onChange={(event) => {setUrl(event.target.value)}} />
            </label>
            <div className="buttons">
              <button onClick={GenerateQRCode}>Generate</button>
              <a href={qrcode} download='qrcode.png'>Download</a>
            </div>
          </div>
        </div>
    </>
  )
}

export default QRCodePage