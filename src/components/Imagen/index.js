
const getImagen = ({path, extension}, size )=>{
    const url = `${path}/${size}.${extension}`
    return url;
}


export default getImagen;