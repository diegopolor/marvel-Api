import React from "react";
import ContextGeneral from "./context";
import Routers from "./routers";


function App() {
  return (
    <ContextGeneral>
       <Routers />
    </ContextGeneral> 
  );
}

export default App;
