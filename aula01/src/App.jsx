import Botao from "./components/Botao";
import Curso from "./components/Curso";
import  {Exemplo, Exemplo2 } from "./components/Exemplo";
import Mensagem from "./components/Mensagem";

export default function App() {
  const cores = ["Vermelho", "Amarelo", "Rosa", "Branco"];
  const nome = "Roni";
  const curso = <h1>{nome} estuda React</h1>;
  const numeros = [1, 2, 3, 4, 5];
  //Totalizar o valores do vetor
  const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);

  //Listar os dados vetor cores
  const mapCores = cores.map((cor, index) => <li key={index}>{cor}</li>);
  const nomeCurso='Angular';
  return (
    <>
      <h1>Cores</h1>
      <div>{curso}</div>
      <ul>{mapCores}</ul>
      <h1>Números do vetor:{numeros.join(", ")}</h1>
      <h1>Soma:{soma}</h1>
      <Exemplo/>
      <Exemplo2/>
      <Mensagem/>
      <Curso nome={nomeCurso}/>
      <Botao nome= 'Coisa'/>
    </>
  );
}
