import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Character from "../pages/Character";
import Characters from "../pages/Characters";
import Home from "../pages/Home";

const Routers = ()=>(
    <Router>
        <Switch>
            <Route path = "/" exact>
               <Home />
            </Route>
            <Route path = "/characters" exact>
               <Characters />
            </Route>
            <Route path = "/character/:id" >
               <Character />
            </Route>
            <Route path = "/series" exact>
               <h1>Series</h1>
            </Route>
            <Route path = "/comics" exact>
               <h1>Comics</h1>
            </Route>
            <Route>
               <h1>Esta pagina no existe</h1>
            </Route>
        </Switch>
    </Router>
)

export default Routers;