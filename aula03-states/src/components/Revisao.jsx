import { useState } from "react";

export default function Revisao() {
  const [nome, setNome] = useState("José");
  const [contador, setContador] = useState(0);

  const [tarefas, setTarefas] = useState([
    "Pagar Conta",
    "Lavar o carro",
    "Estudar React",
  ]);

  const [texto, setTexto] = useState("");

  function adicionarNovaTarefa() {
    setTarefas([...tarefas, texto]);
    setTexto('');
  }
  //   function modificar() {
  //     setNome("Maria");
  //   }

  // const modificar = ()=>setNome("Maria");

  return (
    <div>
      <h1>Exemplo States</h1>
      <p>Nome:{nome}</p>
      <button onClick={() => setNome("Maria")}>Modificar Nome</button>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
      <h1>Tarefas</h1>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type="text" value={texto} onChange={e=>setTexto(e.target.value)}/>
      <button onClick={adicionarNovaTarefa}>Nova Tarefa</button>
      <p>{texto}</p>
    </div>
  );
}
