/*
    Devuelve el titulo para la pagina 
    concatenandole MarvelApi - Titulo
*/

const setTitle = (title)=>(
    document.title = `MarvelAPI - ${title}`
)
    
export default setTitle;