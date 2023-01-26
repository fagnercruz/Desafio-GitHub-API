import './style.css';

const Resultcard = () => {
  return (
    <div className="result-card">
      <div className="profile-container">
        <div className="profile-avatar"></div>
        <div className="profile-data">
          <h3>Informações</h3>
          <div className="campoData">Perfil: </div>
          <div className="campoData">Seguidores: </div>
          <div className="campoData">Localidade: </div>
          <div className="campoData">Nome: </div>
        </div>
      </div>
    </div>
  );
};

export default Resultcard;
