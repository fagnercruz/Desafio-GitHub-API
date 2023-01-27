import "./style.css";

type Props = {
  avatar: string;
  url: string;
  name: string;
  location: string;
  followers: string;
};

const Resultcard = ({ avatar, url, name, location, followers }: Props) => {
  return (
    <div className="result-card">
      <div className="profile-container">
        <div className="profile-avatar">
          <img src={avatar} alt="foto do usuario" />
        </div>
        <div className="profile-data">
          <h3>Informações</h3>
          <div className="campoData">
            <strong>Perfil:</strong> {url}{" "}
          </div>
          <div className="campoData">
            <strong>Seguidores:</strong> {followers}
          </div>
          <div className="campoData">
            <strong>Localidade:</strong> {location}
          </div>
          <div className="campoData">
            <strong>Nome:</strong> {name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultcard;
