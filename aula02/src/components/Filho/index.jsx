import React from "react";
import "./style.css";

export default function Filho(props) {
  const listaPessoas = props.p;
  
  //css incorporado no arquivo
  const texto = {
    fontSize: "4rem",
    color:'#ddd'
  };

  return (
    <div>
      <h1 style={texto}>Css incorporado</h1>
      <h2 style={{color:'green', fontSize:'2em'}}>Css inline</h2>
      <ul>
        {listaPessoas.map((pessoa) => {
          return (
            <li>
              {pessoa.nome} - {pessoa.idade}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
