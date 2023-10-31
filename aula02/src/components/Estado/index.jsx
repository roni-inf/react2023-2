import React from "react";
import { useState } from "react";

export default function Estado() {
  //   let valor = 200;
  const [valor, setValor] = useState(200);

  //   const calcular = () => {
  //     setValor(valor*2);
  //     console.log(valor);
  //   };

  return (
    <div>
      <h1>Exemplo uso do useState</h1>
      <p>resultado:{valor}</p>
      <button
        onClick={() => {
          setValor(valor * 2);
        }}
      >
        Calcular State
      </button>{" "}
    </div>
  );
}
