import getImagen from "../../../../../components/Imagen";

const CharacterPortada = ({img, name, description}) =>{

    return(
        <div className = "character-portada">
            <div className = "character-portada-content">
                <img 
                    className = "character-portada-img" 
                    src = {getImagen(img, "portrait_uncanny")} 
                    alt = "foto" 
                />
                <div className = "character-portada-text">
                    <h3>{name}</h3>
                    <p className = "character-portada-descrip">{description.length < 1  ? "Description not available" : description}</p>
                </div>
            </div>            
        </div>
    )
}

export default CharacterPortada;