import Navbar from "components/Navbar";
import Home from "pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Rotas = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
  );
};

export default Rotas;