import Navbar from "components/Navbar";
import Home from "pages/Home";
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
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;
