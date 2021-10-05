import { useEffect } from "react";
import { useParams } from "react-router";
import { useContext } from "react/cjs/react.development";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import comicsContext from "../../context/ComicsContext";
import ComicPortada from "./components/ComicPortada";

const Comic = ()=>{

    const {comicsDetail, getComicsDetail, loadingComics} = useContext(comicsContext)
    const {id} = useParams()
    const comic = comicsDetail?.data?.results
    
    useEffect(()=>{
            getComicsDetail(id).catch(null)
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    

    return (
        <>
        <Header />
        <NavBar />
        <h1>{id} </h1>
        <ComicPortada data ={comic}/>
        
        </>
    )
}

export default Comic;