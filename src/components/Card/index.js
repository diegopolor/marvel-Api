import { Link } from 'react-router-dom'
import getImagen from '../Imagen';
import './styles.css'

const Card = ({id, titulo, img })=>{
    return(
        <Link className = "card" to = {`/character/${id}`}>       
            <img className="card-img" src = {getImagen(img, "portrait_xlarge")} alt = {titulo} />
            <div className = "card-info">
                <h5 className = "card-title">{titulo}</h5>
            </div>     
        </Link>  
    )
}

export default Card;