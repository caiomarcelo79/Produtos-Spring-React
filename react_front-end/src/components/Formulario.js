function Formulario({botao}){


  var teste = null
  if (botao === true) {
    teste = (
      <>
        <input type="button" value='Cadastrar' className="btn btn-primary" />
      </>
    )
  }else{
    teste = (
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
      <input type="text" placeholder="Nome" className="form-control" /> <br/>
      <input type="text" placeholder="Marca" className="form-control" /> <br/>

      {teste}
      
    </form>

    </div>
  )
}

export default Formulario