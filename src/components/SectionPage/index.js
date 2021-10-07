import Card from "../Card"
import './styles.css'

//Paginas donde se muestran cada sesión comnpleta
const SectionPage = ({data, url})=>{
    const printCards = ()=>{  
        const cards = data?.map(({ id, name, title, thumbnail } )=>(   
            <Card 
                key = {id}
                id = {id} 
                url = {url}
                name = {name} 
                titulo ={title}
                img = {thumbnail}
            />
        ));
        return cards;        
    }

    return( 
       <div className = "section-page">
            {printCards()}
       </div>       
    )

}

export default SectionPage;