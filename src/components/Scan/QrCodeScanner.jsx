import {QRCodeSVG} from 'qrcode.react'
import {useState, useEffect} from 'react'
import {Scanner} from '@yudiel/react-qr-scanner'
import {Navigation} from '../Navigation.jsx'
export const QrCodeScanner = () =>{
    const  scanHanler = (event) => {
        console.log(event)
    }
    return (
        <div>
            {/*<Navigation/>*/}
                <Scanner onScan={scanHanler}/>
        </div>
    )
}