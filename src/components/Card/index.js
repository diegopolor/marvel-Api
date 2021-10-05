import { Link } from 'react-router-dom'
import getImagen from '../Imagen';
import './styles.css'

const Card = ({
    id, 
    url, 
    titulo, 
    name, 
    img })=>{

    const getName = ()=>(
        name?.length ?
         name?.replace(/ /g, '-')    //reeemplaza los espacion en blanco del string por un - 
         : titulo?.replace(/ /g, '-').replace("#", ".") //reemplaza el # del string por .  - 
    ) 

    return(
        <Link className = "card" to = {`/${url}/${getName()}/${id}`}>       
            <img className="card-img" src = {getImagen(img, "portrait_xlarge")} alt = {name?.length ? name : titulo} />
            <div className = "card-info">
                <h5 className = "card-title">{name?.length ? name : titulo}</h5>
            </div>     
        </Link>  
    )
}

export default Card;