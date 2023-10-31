import React from "react";
class AppClasse extends React.Component {
  //O construtor é executado quando a classe é criada
  constructor(props) {
    super(props);
    this.state = {
      dia: "terça-feira",
    };
  }
//após a montagem do componente
  componentDidMount() {
    this.setState({ dia: "sexta-feira" });
    console.log("Montado");
  }
//após a atualização
  componentDidUpdate() {
    console.log("Atualizado");
  }
//na remoção do componente
  componentWillUnmount(){
      console.log("Componente removido da DOM");
  }


  render() {
    return (
      <div>
        {/* <h1>Componente de Classe</h1>
        <h2>{this.props.curso}</h2> */}
        <h1>{this.state.dia}</h1>
      </div>
    );
  }
}
export default AppClasse;
