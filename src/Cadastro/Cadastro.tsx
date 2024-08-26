import React, { useState } from "react";
import "./Cadastro.css";

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState("");
  const [jogo, setJogo] = useState("");
  const [servidor, setServidor] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const cadastroData = {
      nome,
      jogo,
      servidor,
    };

    try {
      const response = await fetch("http://localhost:8080/api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastroData),
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        setNome("");
        setJogo("");
        setServidor("");
      } else {
        alert("Erro ao realizar cadastro.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao realizar cadastro.");
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit} className="cadastro-form">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jogo">Jogo:</label>
          <input
            type="text"
            id="jogo"
            value={jogo}
            onChange={(e) => setJogo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="servidor">Servidor:</label>
          <input
            type="text"
            id="servidor"
            value={servidor}
            onChange={(e) => setServidor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
