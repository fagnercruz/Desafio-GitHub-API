import SimpleButtom from "components/SimpleButtom";
import { Link } from "react-router-dom";
import "./style.css";

const Searchcard = () => {
  return (
    <div className="moldura-card">
      <h1>Encontre um perfil no Github</h1>
      <form>
        <div className="form-group">
          <label htmlFor="githubUser">Usuário</label>
          <input
            type="text"
            className="form-control input"
            id="githubUser"
            placeholder="Digite o nome do usuário para pesquisar"
          />
        </div>
      </form>
      <Link to="/results" style={{ textDecoration: "none" }}>
        <SimpleButtom texto="Encontrar" />
      </Link>
    </div>
  );
};

export default Searchcard;
