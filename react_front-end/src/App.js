import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Tabela from './components/Tabela';

function App() {

  const [btnCadastrar, setBtnCadastrar] = useState(true)
  const [produtos, setProdutos] = useState([])

  useEffect(function(){
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
  }, [])


  return (
    <div className="App">
      <p>{JSON.stringify(produtos)}</p>
      <Formulario botao={btnCadastrar} />
      <Tabela vetor={produtos} />
    </div>
  );
}

export default App;
