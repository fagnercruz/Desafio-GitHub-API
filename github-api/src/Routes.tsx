import Navbar from "components/Navbar";
import Home from "pages/Home";
import Results from "pages/Results";
import Search from "pages/Search";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Rotas = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search" exact>
                <Search />
            </Route>
            <Route path="/results" exact>
                <Results />
            </Route>
        </Switch>
    </BrowserRouter>
  );
};

export default Rotas;
