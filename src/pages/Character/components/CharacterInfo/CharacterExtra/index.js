import Comics from "./Comics";
import Series from "./Series";
import './styles.css'

const CharacterExtra = ({data})=>{
     const dataComics = data?.comics?.items
     const dataSeries = data?.series?.items

    
    return(
        <div className = "character-extra">
             <Comics  comics = {dataComics}/>
             <Series series = {dataSeries} />
        </div>
       
    )

}

export default CharacterExtra;