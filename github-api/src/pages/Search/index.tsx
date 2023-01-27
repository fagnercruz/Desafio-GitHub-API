import axios from "axios";
import Resultcard from "components/Resultcard";
import SimpleButtom from "components/SimpleButtom";
import { useState } from "react";
import { BouncyBallsLoader } from "react-loaders-kit";
import "./style.css";

type FormData = {
  githubUser: string;
};

type GitJson = {
  avatar_url: string;
  html_url: string;
  name: string;
  location: string;
  followers: string;
};

const Search = () => {
  //UseState para o formulário
  const [formData, setFormData] = useState<FormData>({
    githubUser: "",
  });

  //UseState para os dados JSON da API
  const [gitJson, setGitJson] = useState<GitJson>();

  //UseState para o loader
  const [isLoading, setIsLoading] = useState(false);
  
  //Props para ser usada no react-loaders-kit (outro tipo de loader)
  const loaderProps = {
    loading: isLoading,
    size: 60,
    colors: ['#60666d','#adbac7', '#60666d']
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.githubUser}`)
      .then((resultado) => {
        setGitJson(resultado.data);
      })
      .catch((error) => {
        setGitJson(undefined);
      }).finally(()=> {
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      <div className="moldura-card">
        <h1>Encontre um perfil no Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="githubUser">Usuário</label>
            <input
              type="text"
              className="form-control input"
              id="githubUser"
              name="githubUser"
              value={formData.githubUser}
              placeholder="Digite o nome do usuário para pesquisar"
              onChange={handleChange}
            />
          </div>
          <SimpleButtom texto="Começar" />
        </form>
      </div>
      {
        isLoading ? (
          <div className="moldura-card col-xl-12 loader">
            <BouncyBallsLoader {...loaderProps} />
          </div>
        ) : (
           gitJson && (
            <div className="moldura-card">
              <Resultcard
                avatar={gitJson?.avatar_url}
                followers={gitJson?.followers}
                location={gitJson?.location}
                url={gitJson?.html_url}
                name={gitJson?.name}
              />
            </div>
          )
        )
      }
      
    </div>
  );
};

export default Search;
