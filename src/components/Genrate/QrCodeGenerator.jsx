import {QRCodeSVG} from 'qrcode.react'
import {useState, useEffect} from 'react'

import {Navigation} from '../Navigation/Navigation.jsx'
import {GENERATE_DATA, SCAN_DATA} from "../../constants.js";
export const QrCodeGenerator = () =>{
    const [value,setvalue] = useState('122')
    const [isShowQRCode,setisShowQRCode] = useState(false)


    console.log(value)
    console.log(setvalue)
    const onClickHanler = (event) => {
        const preData=JSON.parse(localStorage.getItem(GENERATE_DATA )|| '[]' )

        localStorage.setItem(GENERATE_DATA, JSON.stringify([...preData, value]))
        console.log(JSON.parse(localStorage.getItem(GENERATE_DATA )|| '[]' ))
        setisShowQRCode(true);
        setvalue('')


    }
    const ononChangeHanler = (event) => {
        setisShowQRCode(false);
        setvalue(event.target.value)

    }
    return (
        <div>
            {/*<Navigation/>*/}
            {isShowQRCode && (
                <QRCodeSVG value = {value} />
            )}

            <input type="text" value = {value} onChange={ononChangeHanler}/>
            <button onClick = {onClickHanler}>gen</button>
        </div>
    )
}