import {QRCodeSVG} from 'qrcode.react'
import {useState, useEffect} from 'react'
import {Scanner} from '@yudiel/react-qr-scanner'
import {Navigation} from '../Navigation/Navigation.jsx'
import {SCAN_DATA} from '../../constants'
export const QrCodeScanner = () =>{
    console.log('SCAN_DATA',SCAN_DATA)

    const  scanHanler = (event) => {

        const preData=JSON.parse(localStorage.getItem(SCAN_DATA )|| '[]' )
        localStorage.setItem(SCAN_DATA, JSON.stringify([preData, event[0],rawValue]))
    }
    return (
        <div>
            {/*<Navigation/>*/}
                <Scanner onScan={scanHanler}/>
        </div>
    )
}