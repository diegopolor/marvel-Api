import getImagen from '../../../../components/Imagen';
import Creator from './Creators';
import './styles.css'

const ComicsCover = ({titulo, description, img, creators}) =>{
    const imagen = getImagen(img, "portrait_uncanny")

    return(
        <div className="comics-cover">
                <div className="comics-cover-content">
                    <img src = {imagen} alt = "foto" className="comics-cover-img" />
                    <div className="comics-cover-info">
                            <h2>{titulo}</h2>
                            <p className = "comics-cover-desccription">
                                {description?.length ? description : "No avalible"}                
                            </p>
                            <Creator  creators = {creators}/>

                    </div>
                </div>
        </div>
    )

}

export default ComicsCover;