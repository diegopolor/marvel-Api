import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

import { useContext } from "react/cjs/react.development";
import characterContext from "../../context/CharactersContext"
import SectionPage from "../../components/SectionPage";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import setTitle from "../../components/Title";

const Characters = ()=>{
    const {characters, getCharacters, loadingCharacter} = useContext(characterContext)
    
    useEffect(()=>{
        getCharacters()
        setTitle("Characters")
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    
    return(
        <>
            <Header />
            <NavBar />
            {loadingCharacter ? <Loading /> : <SectionPage url = "character"data = {characters?.data?.results} /> } 
        </>
    )

}

export default Characters;