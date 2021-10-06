const Series = ({series})=>{

    const printSeries = ()=>(
        series?.map((s, index )=>{
            return <p className = "links" key = {index}>{s.name}</p>
        })
    )

    return(
        <div className = "character-extra-series">
            <div className = "character-extra-title">
                <h2>Series</h2>
                <hr />
           </div>
           {printSeries()}
        </div>
    )

}

export default Series;