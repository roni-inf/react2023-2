import React from "react";

export default function Eventos() {
  const handleClick = () => {
    alert("Clicou no botão !");
  };

  return (
    <div>
      <h1>Evento de Click</h1>
      <button onClick={handleClick}>Clicar</button>
      <button
        onClick={() => {
          alert("Clicou no botão2 !");
        }}
      >
        Clique 2
      </button>
    </div>
  );
}
