import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

import { useContext } from "react/cjs/react.development";
import characterContext from "../../context/CharactersContext"
import SectionCharacters from "./components/SectionCharacters";
import { useEffect } from "react";
import Loading from "../../components/Loading";

const Characters = ()=>{
    const {characters, getCharacters, loading} = useContext(characterContext)
    
    useEffect(()=>{
        getCharacters()
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    
    return(
        <>
            <Header />
            <NavBar />
            {loading ? <Loading /> : <SectionCharacters data = {characters?.data?.results} /> } 
        </>
    )

}

export default Characters;