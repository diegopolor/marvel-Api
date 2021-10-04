import React from "react";
import Routers from "./routers";
import CharacterProvider from "./context/CharactersContext/provider";

function App() {
  return (
    <CharacterProvider>
      <Routers />
    </CharacterProvider>
       
    
  );
}

export default App;
