import {useState } from "react";
import requestApi from "../../api";
import CharacterContext from "./index";

const CharacterProvider = ({ children })=>{
    const [characters, setCharacters] = useState({})
    const [characterDetail, setCharacterDetail] = useState({})
    const [loading, setLoading] = useState(false)

    const getCharacters = async()=>{
        try{
            setLoading(true)
            const response = await requestApi({ url : "/v1/public/characters"});
            setCharacters(response)
            setLoading(false)
        }catch(error){
            setCharacters({})
            Promise.reject(error)
        }      
    }

    const getCharacterDetail = async(id)=>{
        try{
            setLoading(true)
            const response = await requestApi({ url : `/v1/public/characters/${id}`});
            setCharacterDetail(response)
            setLoading(false)
        }catch(error){
            setCharacterDetail({})
            Promise.reject(error)
        }      
    }
 
    return (
        <CharacterContext.Provider value=
        {{
            characters, 
            getCharacters, 
            characterDetail,
            getCharacterDetail,
            loading
        }}> 
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterProvider