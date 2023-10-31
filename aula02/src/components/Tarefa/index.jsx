import React from 'react'

export default function Tarefa({titulo, descricao,status}) {
  return (
    <div>
        <h2>{titulo}</h2>
        <h2>{descricao}</h2>
        <p>Status:{status? 'Concluída':'Pendente'}</p>

    </div>
  )
}
