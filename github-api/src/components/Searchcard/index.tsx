import SimpleButtom from "components/SimpleButtom";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

type FormData = {
  githubUser: string;
}


const Searchcard = () => {

  const [formData, setFormData] = useState<FormData>({
    githubUser: ''
  });
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({...formData, [name]:value});
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    console.log(formData);
  };

  return (
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
        <button type='submit' className='btn btn-primary'>
                <p>oi</p>
            </button>
        <Link to="/results" style={{ textDecoration: "none" }}>
         
        </Link>
      </form>
    </div>
  );
};

export default Searchcard;
