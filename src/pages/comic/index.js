import { useEffect } from "react";
import { useParams } from "react-router";
import { useContext } from "react/cjs/react.development";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import NavBar from "../../components/NavBar";
import comicsContext from "../../context/ComicsContext";
import ComicsCover from "./components/ComicsCover";

const Comic = ()=>{

    const {comicsDetail, getComicsDetail, loadingComics} = useContext(comicsContext)
    const {id} = useParams()
    const comic = comicsDetail?.data?.results

    useEffect(()=>{
            getComicsDetail(id).catch(null)
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    
    console.log(comicsDetail)
    const printComicsCover = ()=>(
        comic?.map(({ id , title , thumbnail, description, creators}) =>(
            <ComicsCover 
                key = {id} 
                titulo = {title} 
                img = {thumbnail} 
                creators = {creators}
                description = {description}
     
            /> 
        ))
    )

    return (
        <>
        <Header />
        <NavBar />
        { loadingComics ? <Loading /> : printComicsCover()}
        </>
    )
}

export default Comic;