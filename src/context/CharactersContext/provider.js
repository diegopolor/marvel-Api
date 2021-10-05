import {useState } from "react";
import {getDataApi} from "../../api";
import CharacterContext from "./index";

//provider que contiene los datos globales de los personajes
const CharacterProvider = ({ children })=>{
    const [characters, setCharacters] = useState({})
    const [characterDetail, setCharacterDetail] = useState({})
    const [loadingCharacter, setLoadingCharacter] = useState(false)

    //obtiene los datos de todos los personajes 
    const getCharacters = async()=>{
        getDataApi({
            url: "/v1/public/characters",
            changeState : setCharacters,
            loading : setLoadingCharacter
        })    
    }

    //obtiene los datos del pérsonaje que se pase la id
    const getCharacterDetail = async(id)=>{
        getDataApi({
            url:  `/v1/public/characters/${id}`,
            changeState: setCharacterDetail,
            loading : setLoadingCharacter
        })    
    }
 
    return (
        <CharacterContext.Provider value=
        {{
            characters, 
            getCharacters, 
            characterDetail,
            getCharacterDetail,
            loadingCharacter
        }}> 
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterProvider