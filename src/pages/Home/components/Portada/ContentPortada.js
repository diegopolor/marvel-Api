import './styles.css'
import img from '../../../../assets/marvel-logo2.png'


const ContentPortada = () =>(
    <div className = "portada-content" >
        <img  className = "portada-img" src = {img}  alt = "portada"/>
        <div className = "portada-text">
            <h3>Marvel</h3>
            <p>
                Marvel Comics is the brand name and primary imprint of Marvel Worldwide Inc., formerly
                Marvel Publishing, Inc. and Marvel Comics Group, a publisher of American comic books and 
                related media. In 2009, The Walt Disney Company acquired Marvel Entertainment, Marvel 
                Worldwide's parent company.
            </p>

        </div>

    </div>

)




export default ContentPortada;