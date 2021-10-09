import { useContext, useEffect } from "react";
import Header from "../../components/Header"
import Loading from "../../components/Loading";
import NavBar from "../../components/NavBar";
import Section from "../../components/Section";
import setTitle from "../../components/Title";
import CharacterContext from "../../context/CharactersContext";
import comicsContext from "../../context/ComicsContext";
import Portada from "./components/Portada";


const Home = ()=>{
    const {characters, getCharacters, loadingCharacter} = useContext(CharacterContext)  
    const {comics, getComics, loadingComics} = useContext(comicsContext)
  
    useEffect(()=>{
        getCharacters().catch(null); 
        getComics().catch() 
        setTitle("Home")     
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return(
        <>
            <Header />
            <NavBar />
            <Portada />
            {loadingCharacter ?
                <Loading /> 
                :<Section 
                    url = "character" 
                    nameSection = "Characters" 
                    data = {characters?.data?.results}
                />}  
            {loadingComics ? 
                <Loading /> 
                : <Section 
                    url = "comic" 
                    nameSection = "Comics" 
                    data = {comics?.data?.results}
                  />}          
        </>
    )
}

export default Home;