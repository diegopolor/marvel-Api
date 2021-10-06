import { Link } from "react-router-dom";


const Comics = ({comics})=>{

    const getId = (url)=>{
        const id = url?.split("/")[6]
        return id
    }

    const getName = (name)=>(
        name?.length &&
         name?.replace(/ /g, '-').replace("#", ".")    //reeemplaza los espacion en blanco del string por un - 
    ) 

    const printComics = ()=>(
        comics?.map(({name, resourceURI}, index )=>(    
                <Link className = "links"
                    to = {`/comic/${getName(name)}/${getId(resourceURI)}`} 
                    key = {index}>{name}
                </Link>
            )         
        )
    )

    return(
       <div className = "character-extra-comics">
            <div className = "character-extra-title">
                <h2>Comics</h2>
                <hr />
           </div>
           {printComics()}
       </div>
    )

}

export default Comics;