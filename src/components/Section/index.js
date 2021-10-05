
import { Link } from 'react-router-dom';
import Card from '../Card';
import './styles.css'

const Section = ({ url, nameSection, data })=>{
   
    const printCards = ()=>{  
        const cards = data?.map(( {id, name, title, thumbnail }, index )=>(
            index < 5 &&    
            <Card 
                key = {id} 
                url = {url}
                id = {id}
                name = {name}
                titulo = {title} 
                img = {thumbnail}           
            />
        ));
        return cards   
   } 

    return(
        <div className = "section">
            <h1>{nameSection}</h1>
            <div className = "section-cards">      
                {printCards()}
                <Link className = "section-more" to= {`/${nameSection}`} > </Link>
            </div>        
        </div>
    )

}

export default Section;