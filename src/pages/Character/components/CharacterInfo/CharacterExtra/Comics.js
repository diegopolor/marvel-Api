const Comics = ({comics})=>{
 
    const printComics = ()=>(
        comics?.map((c, index )=>{
            return <p key = {index}>{c.name}</p>
        })
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