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
  const [objProduto, SetObjProduto] = useState(produto)

  useEffect(function(){
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
  }, [])

  const aoDigitar = (event)=>{
    SetObjProduto({...objProduto, [event.target.name]:event.target.value})
  }

  const cadastrar = ()=>{
    fetch('http://localhost:8080/cadastrar', {
      method:'post',
      body:JSON.stringify(objProduto),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      console.log(retorno_convertido)

      if (retorno_convertido.mensagem !== undefined) {
        alert(retorno_convertido.mensagem)
      }else{
        setProdutos([...produtos, retorno_convertido])
        alert('Produto cadastrado com sucesso')
        limparFormulario()
      }

    })
  }

  const remover = ()=>{
    fetch('http://localhost:8080/remover/'+objProduto.id, {
      method:'delete',
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      alert(retorno_convertido.mensagem)

      let vetorTemp = [...produtos]

      let indice = vetorTemp.findIndex((p)=>{
        return p.id === objProduto.id
      })

      vetorTemp.splice(indice, 1)

      setProdutos(vetorTemp)

      limparFormulario()

    })
  }

  let testando = [...produtos]

  console.log(testando)

  const limparFormulario = ()=>{
    SetObjProduto(produto)
    setBtnCadastrar(true)
  }

  const selecionarProduto = (indice)=>{
    SetObjProduto(produtos[indice])
    setBtnCadastrar(false)
  }

  return (
    <div className="App">
      
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProduto} cancelar={limparFormulario} remover={remover} />
      <Tabela vetor={produtos} selecionar={selecionarProduto} />
    </div>
  );
}

export default App;
