import { useContext, useEffect } from "react";
import Header from "../../components/Header"
import Loading from "../../components/Loading";
import NavBar from "../../components/NavBar";
import Section from "../../components/Section";
import CharacterContext from "../../context/CharactersContext";
import Portada from "./components/Portada";

const Home = ()=>{
    const {characters, getCharacters, loading} = useContext(CharacterContext)  

    useEffect(()=>{
        getCharacters().catch(null);      
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return(
        <>
            <Header />
            <NavBar />
            <Portada />
            {loading ? <Loading /> : <Section name = "Characters" data = {characters?.data?.results}/>}          
        </>
    )
}

export default Home;