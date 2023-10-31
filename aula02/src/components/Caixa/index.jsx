import React from "react";

export default function Caixa(props) {
  const caixa = {
    width: "100px",
    height: "100px",
    backgroundColor: props.cor,
  };
  

    return (
    <div>
      <h1>Caixa</h1>
      <div style={caixa}>
        <p>Serratec</p>
      </div>
    </div>
  );
}
