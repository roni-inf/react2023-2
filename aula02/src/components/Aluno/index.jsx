import React from 'react'

export default function Aluno({nome, idade,telefone}) {
  return (
    <div>
        <p>Nome:{nome}</p>
        <p>Idade:{idade}</p>
        <p>Telefone:{telefone}</p>
    </div>
  )
}
