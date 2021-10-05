import { useState } from "react/cjs/react.development";
import comicsContext from "./index";
import {getDataApi} from "./../../api"

//provider que contiene los datos globales de los
const ComicsProvider = ({children})=>{
    const [comics, setComics] = useState({})
    const [comicsDetail, setComicsDetail] = useState({})
    const [loadingComics, setLoadingComics] = useState(false)


    //obtinee los datos de todos los comics
    const getComics= async()=>{
        getDataApi({
            url : "/v1/public/comics",
            changeState : setComics,
            loading : setLoadingComics
        })
    }

    //obtiene los detalles del comic que se pase la id
    const getComicsDetail = async(id)=>{
        getDataApi({
            url : `/v1/public/comics/${id}`,
            changeState : setComicsDetail,
            loading : setLoadingComics
        })
    }

    return(
        <comicsContext.Provider value = {{
                comics, 
                getComics , 
                comicsDetail,
                getComicsDetail,
                loadingComics
            }}
        >
            {children}
        </comicsContext.Provider>
    )
}

export default ComicsProvider;