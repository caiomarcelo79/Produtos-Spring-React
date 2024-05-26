function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover}){


  var decisao = null
  if (botao === true) {
    decisao = (
      <>
        <input type="button" value='Cadastrar' onClick={cadastrar} className="btn btn-primary" />
      </>
    )
  }else{
    decisao = (
      <>
        <input type="button" value='Alterar' className="btn btn-warning" />
        <input type="button" value='Remover' onClick={remover} className="btn btn-danger" />
        <input type="button" value='Cancelar' onClick={cancelar} className="btn btn-secondary" />
      </>
    )
  }



  return(
    <div>

    <form>
      <input type="text" value={obj.nome} onChange={eventoTeclado} name="nome" placeholder="Nome" className="form-control" /> <br/>
      <input type="text" value={obj.marca} onChange={eventoTeclado} name="marca" placeholder="Marca" className="form-control" /> <br/>

      {decisao}
      
    </form>

    </div>
  )
}

export default Formulario