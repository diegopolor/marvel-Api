import { useContext, useEffect } from "react/cjs/react.development";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import NavBar from "../../components/NavBar";
import SectionPage from "../../components/SectionPage";
import comicsContext from "../../context/ComicsContext";

//componente de la pagina donde se muestran todos los comics
const Comics = ()=>{
    const {comics, getComics, loadingComics} = useContext(comicsContext)

    //hace la peticion a la api con getComics()
    useEffect(()=>{
        const getData = async()=>{
            try{
                getComics().catch(null)
            }catch(error){
                Promise.reject(error)
            }
        }
        getData()   
    } , [])// eslint-disable-line react-hooks/exhaustive-deps
   
    return(
        <>
        <Header />
        <NavBar />
        {loadingComics ? // 
            <Loading /> :
            <SectionPage url = "comic" data = {comics?.data?.results} />   
        }
        </>      
    )

}

export default Comics;