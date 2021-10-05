import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Character from "../pages/Character";
import Characters from "../pages/Characters";
import Comic from "../pages/comic";
import Comics from "../pages/Comics";
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
            <Route path = "/character/:name/:id" >
               <Character />
            </Route>
            <Route path = "/series" exact>
               <h1>Series</h1>
            </Route>
            <Route path = "/comics" exact>
               <Comics />
            </Route>
            <Route path = "/comic/:name/:id" exact>
               <Comic />
            </Route>
            <Route>
               <h1>Esta pagina no existe</h1>
            </Route>
        </Switch>
    </Router>
)

export default Routers;