
import { Link } from 'react-router-dom';
import Card from '../Card';
import './styles.css'

const Section = ({ name, data })=>{
    const printCards = ()=>{  
        const cards = data?.map(( {id, name, thumbnail }, index )=>(
            index < 5 &&    
            <Card 
                key = {id} 
                id = {id}
                titulo = {name} 
                img = {thumbnail}           
            />
        ));
        return cards   
   } 

    return(
        <div className = "section">
            <h1>{name}</h1>
            <div className = "section-cards">      
                {printCards()}
                <Link className = "section-more" to= "/characters" > </Link>
            </div>        
        </div>
    )

}

export default Section;