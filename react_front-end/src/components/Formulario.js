function Formulario({botao, eventoTeclado}){


  var decisao = null
  if (botao === true) {
    decisao = (
      <>
        <input type="button" value='Cadastrar' className="btn btn-primary" />
      </>
    )
  }else{
    decisao = (
      <div>
        <input type="button" value='Alterar' className="btn btn-warning" />
        <input type="button" value='Remover' className="btn btn-danger" />
        <input type="button" value='Cancelar' className="btn btn-secondary" />
      </div>
    )
  }

  return(
    <div>

    <form>
      <input type="text" onChange={eventoTeclado} name="nome" placeholder="Nome" className="form-control" /> <br/>
      <input type="text" onChange={eventoTeclado} name="marca" placeholder="Marca" className="form-control" /> <br/>

      {decisao}
      
    </form>

    </div>
  )
}

export default Formulario