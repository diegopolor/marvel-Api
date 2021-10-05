import CharacterProvider from "./CharactersContext/provider"
import ComicsProvider from "./ComicsContext/provider";


const ContextGeneral = ({children})=>{
    return(
        <CharacterProvider>
            <ComicsProvider>
                {children}
            </ComicsProvider>
        </CharacterProvider>
    )
}

export default ContextGeneral;