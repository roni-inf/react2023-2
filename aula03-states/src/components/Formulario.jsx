import { useState } from "react";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function enviarServidor(e) {
    e.preventDefault();
    console.log(`Dados Cliente: ${nome} - ${email}`);
    setNome('');
    setEmail('');
  }

  return (
    <div>
      <h1>Cadastro de Clientes</h1>
      <form onSubmit={enviarServidor}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          placeholder="Preencha o nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Preencha o email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
