import { useEffect } from "react";
import { useParams } from "react-router";
import { useContext } from "react/cjs/react.development";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import NavBar from "../../components/NavBar";
import characterContext from "../../context/CharactersContext";
import CharacterInfo from "./components/CharacterInfo";


const Character = ()=>{
    const { id } = useParams()
    const {characterDetail, getCharacterDetail, loadingCharacter} = useContext(characterContext)
    const character = characterDetail?.data?.results;

    useEffect(()=>{
        getCharacterDetail(id)?.catch(null)
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    //imprime el personaje pasado en el array de resultado de pesonaje
    const printCharacterInfo = ()=> (
        character?.map((character, index)=> (
            <CharacterInfo key = {index} data = {character} />)
        )
    )
    
    return(
        <>
            <Header />
            <NavBar />
            {loadingCharacter ? <Loading /> : printCharacterInfo()}    
        </>
     
    )

}

export default Character;