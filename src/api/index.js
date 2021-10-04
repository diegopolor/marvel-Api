
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

export default requestApi;