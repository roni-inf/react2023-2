import React from "react";
import { useParams } from "react-router-dom";

export default function Produto() {
  const { id } = useParams();
  return (
    <div>
      <h1>Detalhes de produto {id}</h1>
    </div>
  );
}
