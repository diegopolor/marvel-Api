
/*
    Obtiene la infomación de la imagen en la peticion 
    y la reune devolviendo la url correcta para mostrar la imagen

    metodos:
    {
        path: url base de la imagen
        extensión : extension de la imagen .jpg .png, etc
    }
    size : el tamaño de la imagen que ofrece la API

    EJEMPLO:

    path:    http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec/
    extensión:   .jpg 
    size :  portrait_uncanny

    si pasamos los parametros del ejemplo nos devuelve la url:

    http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec/portrait_uncanny.jpg

 

*/

const getImagen = ({path, extension}, size )=>{
    const url = `${path}/${size}.${extension}`
    return url;
}


export default getImagen;