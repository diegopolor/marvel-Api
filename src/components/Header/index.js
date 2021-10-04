import { Link } from "react-router-dom";
import logo from "../../assets/marvel-logo.png"
import './styles.css'
const Header = ()=>(
    <header className="header">
        <Link to="/">
            <img className = "header-img" src = {logo} alt = "logo"/>
         </Link>   
    </header>
)

export default Header;