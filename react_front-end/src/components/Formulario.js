function Formulario(){

  return(
    <>

    <form>
      <input type="text" placeholder="Nome" /> <br/>
      <input type="text" placeholder="Marca" /> <br/>

      <input type="button" value='Cadastrar' />
      <input type="button" value='Alterar' />
      <input type="button" value='Remover' />
      <input type="button" value='Cancelar' />
    </form>

    </>
  )
}

export default Formulario