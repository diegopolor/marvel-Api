import Card from "../../../../components/Card"
import './styles.css'

const SectionCharacters = ({data})=>{
    const printCards = ()=>{  
        const cards = data?.map(({ id, name, thumbnail } )=>(   
            <Card 
                key = {id}
                id = {id} 
                titulo = {name} 
                img = {thumbnail}
            />
        ));
        return cards;        
    }

    return( 
       <div className = "sectioncharacter">
            {printCards()}
       </div>
            
           
    )

}

export default SectionCharacters;