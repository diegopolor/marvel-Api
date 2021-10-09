

import CharacterExtra from './CharacterExtra';
import CharacterPortada from './CharacterPortada';
import './styles.css'

const CharacterInfo = ({data})=>{
    console.log(data)
    return(
        <>
            <CharacterPortada 
                img = {data?.thumbnail} 
                name = {data?.name} 
                description = {data?.description} 
            />
            <CharacterExtra data = {data} />
            
        </>
    )
}

export default CharacterInfo;