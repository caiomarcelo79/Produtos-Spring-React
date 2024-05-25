import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Tabela from './components/Tabela';

function App() {

  const produto = {
    id: 0,
    nome: '',
    marca: ''
  }


  const [btnCadastrar, setBtnCadastrar] = useState(true)
  const [produtos, setProdutos] = useState([])
  const [objproduto, SetObjProduto] = useState(produto)

  useEffect(function(){
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
  }, [])

  const aoDigitar = (event)=>{
    SetObjProduto({...objproduto, [event.target.name]:event.target.value})
  }

  return (
    <div className="App">
      <p>{JSON.stringify(objproduto)}</p>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} />
      <Tabela vetor={produtos} />
    </div>
  );
}

export default App;
