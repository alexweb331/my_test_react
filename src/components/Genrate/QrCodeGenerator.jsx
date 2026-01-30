import {QRCodeSVG} from 'qrcode.react'
import {useState, useEffect} from 'react'

import {Navigation} from '../Navigation.jsx'
export const QrCodeGenerator = () =>{
    const [value,setvalue] = useState('122')
    const [isShowQRCode,setisShowQRCode] = useState(false)


    console.log(value)
    console.log(setvalue)
    const onClickHanler = (event) => {
        setisShowQRCode(true);
        setvalue('')
    }
    const ononChangeHanler = (event) => {
        setisShowQRCode(false);
        setvalue(event.target.value)

        console.log(value)
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