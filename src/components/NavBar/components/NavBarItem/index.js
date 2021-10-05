import { Link } from "react-router-dom";

const NavBarItem = ({ name })=>(
    <Link className = "navbar-item" to = {`/${name.toLowerCase()}`} >
        {name}
    </Link>

)

export default NavBarItem;