import {QrCodeGenerator} from './components/Genrate/QrCodeGenerator.jsx'
import {QrCodeScanner} from "./components/Scan/QrCodeScanner.jsx";
import {Navigation} from './components/Navigation/Navigation.jsx'
import {Routes, Route, Outlet, Link} from "react-router-dom";

const Layout = () => {
    return(
        <div>
            <Navigation/>
            <Routes>
                <Route path = "/generate" element={<QrCodeGenerator/>}/>
                <Route path = "/scanner" element={<QrCodeScanner/>}/>
            </Routes>
        </div>
    )
}
export {Layout};