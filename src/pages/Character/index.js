import { useEffect } from "react";
import { useParams } from "react-router";
import { useContext } from "react/cjs/react.development";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import NavBar from "../../components/NavBar";
import setTitle from "../../components/Title";
import characterContext from "../../context/CharactersContext";
import CharacterInfo from "./components/CharacterInfo";

//Pagina de personaje indicidual
const Character = ()=>{
    const { id, name } = useParams()
    const {characterDetail, getCharacterDetail, loadingCharacter} = useContext(characterContext)
  

    useEffect(()=>{
        getCharacterDetail(id)?.catch(null)
        setTitle(name)  
        
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    //imprime el personaje
    const printCharacterInfo = (character)=> (
        //si el objeto mp está vacio lo pasa a la prop
        character.isEmpty ? undefined :
            <CharacterInfo data = {character} />    
    )
    
    return(
        <>
            <Header />
            <NavBar />
            {loadingCharacter ? <Loading /> : printCharacterInfo(characterDetail)}    
        </>
     
    )

}

export default Character;