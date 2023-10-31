import Aluno from "./components/Aluno";
import AppClasse from "./components/AppClasse";
import Caixa from "./components/Caixa";
import Estado from "./components/Estado";
import Eventos from "./components/Eventos";
import Pessoa from "./components/Pessoa";
import Tarefa from "./components/Tarefa";

export default function App() {
  return (
    <>
      <Aluno nome="Antônio" idade="50" telefone="2233434" email="a@gmail.com" />
      <Tarefa titulo='Criar Componente' descricao='exercício' status={false}/>
      <Pessoa/>
      <Caixa cor='blue'/>
      <Eventos/>
      <AppClasse curso='React'/>
      <Estado/>
    </>
  );
}
