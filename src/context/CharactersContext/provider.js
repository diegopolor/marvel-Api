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
        const data = characters?.data?.results
        const characterId = data?.
        find(character => character?.id === parseInt(id))
        //si tiene valor "characterID" lo alamacena en el local storage en JSON Serializado
        characterId && localStorage.setItem(
            "characterID", JSON.stringify(characterId)
        )
        //alamcena la data del local storage en el estado parseado como jSON
        setCharacterDetail(JSON.parse(localStorage.characterID)) 
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