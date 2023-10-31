import React from "react";
import Filho from "../Filho";

export default function Pessoa() {
  const pessoas = [
    { nome: "João", idade: 23 },
    { nome: "Maria", idade: 31 },
    { nome: "Carla", idade: 21 },
  ];

  return (
    <div>
      <Filho p={pessoas} />
    </div>
  );
}
