import {Link} from "react-router-dom"
export const Navigation = () => {

    return (
        <nav>
            <Link to='/generate'>gen qr</Link>
            <Link to='/scanner'>scan qr</Link>
            <Link to='/'>history gen qr</Link>
            <Link to='/'>history scan qr</Link>
        </nav>
    )
}