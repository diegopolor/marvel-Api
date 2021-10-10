

//se usa para hacer peticion a la api 
const requestApi = async({url, method = "get", body, headers})=>{
    try{
        const response = await fetch(
            process.env.REACT_APP_API_URL 
            + url 
            +`?apikey=${process.env.REACT_APP_API_KEY}`
            + "&ts=1"
            +`&hash=${process.env.REACT_APP_API_HASH}`, 
            {
                method,
                body,
                headers,
            }
        );
        return response.json()
    }catch(error){
        Promise.reject(error)
    } 
}
//
/*
    Se usa el metodo de requestApi, hace una petición y actualiza el 
    estado del provider donde se use. Este metodo solo se esta usando 
    en los providers para para hacer las peticiones de los context

    methods:
    url : la url de la peticion
    changeState: el estado a cambiar en el provider
    loading: el loading del provider 

 */
const getDataApi = async({url, changeState, loading}) =>{
    try{
        loading(true)
        const response = await requestApi({url : url})
        changeState(response)
        loading(false)
    }catch(error){
        Promise.reject(error)
        changeState({})
    }  

}

export {requestApi, getDataApi};

