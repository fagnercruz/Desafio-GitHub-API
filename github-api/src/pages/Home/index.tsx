import SimpleButtom from "components/SimpleButtom";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="container">
      <h1>Desafio Github API</h1>
      <h5>DevSuperior - Escola de programação</h5>
      <h6>Aluno: Fagner Cunha da Cruz</h6>
      <Link to="/search" style={{textDecoration: 'none'}}>
        <SimpleButtom texto="Começar" />
      </Link>
    </div>
  );
};

export default Home;
