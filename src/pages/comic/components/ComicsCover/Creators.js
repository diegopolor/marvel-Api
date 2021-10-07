

//compomente de creadores de los comics
const Creator = ({creators})=>{  
    const creadores = creators?.items
   
    const getId = (url)=> url?.split("/")[6]; 
    //agregar componente de creador
    const printCreators = ()=>(
     creadores?.map( ({name, role, resourceURI}) =>(
             <div key = {getId(resourceURI)} className="comics-cover-creator">
                 <p>{name}</p>
                 <b>{role}</b>           
             </div>
        )
     ))

     return (
         <div className="comics-cover-creators">
             <h3>Creators</h3>
             <div className="comics-creator-container">
                {printCreators()}  
             </div>
               
         </div>
     )
}
export default Creator