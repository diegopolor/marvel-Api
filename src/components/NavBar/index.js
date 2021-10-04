import NavBarItem from "./components/NavBarItem";
import './styles.css'

const NavBar = ()=>{
    const names = ["Series", "Characters", "Comics"];
    return(
        <nav className = "navbar">
            {names.map((name, index) => <NavBarItem key = {index} name = {name} />)}
        </nav>
    )
}

export default NavBar;