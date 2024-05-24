package br.com.api.produtos.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.produtos.models.ProdutoModel;
import br.com.api.produtos.models.RespostaModel;
import br.com.api.produtos.repository.ProdutoRepository;

@Service
public class ProdutoService {
  
  @Autowired
  private ProdutoRepository pr;

  @Autowired
  private RespostaModel rm;

  public Iterable<ProdutoModel> listar(){
    return pr.findAll();
  }


  public ResponseEntity<?> cadastrar(ProdutoModel pm){

    if(pm.getNome().equals("")){
      rm.setMensagem("O nome do produto é obrigatorio");
      return new ResponseEntity<RespostaModel>(rm, HttpStatus.BAD_REQUEST);
    }else if(pm.getMarca().equals("")){
      rm.setMensagem("O nome da marca é obrigatorio");
      return new ResponseEntity<RespostaModel>(rm, HttpStatus.BAD_REQUEST);
    }else{
      rm.setMensagem("Produto criado com sucesso");
      return new ResponseEntity<ProdutoModel>(pr.save(pm), HttpStatus.CREATED);
    }
  }

  public ResponseEntity<?> alterar(ProdutoModel pm){

    if(pm.getNome().equals("")){
      rm.setMensagem("O nome do produto é obrigatorio");
      return new ResponseEntity<RespostaModel>(rm, HttpStatus.BAD_REQUEST);
    }else if(pm.getMarca().equals("")){
      rm.setMensagem("O nome da marca é obrigatorio");
      return new ResponseEntity<RespostaModel>(rm, HttpStatus.BAD_REQUEST);
    }else{
      rm.setMensagem("Produto alterado com sucesso");
      return new ResponseEntity<ProdutoModel>(pr.save(pm), HttpStatus.OK);
    }
  }

  public ResponseEntity<RespostaModel> remover(long id){

    pr.deleteById(id);

    rm.setMensagem("O produto foi removido com sucesso!");
    return new ResponseEntity<RespostaModel>(rm, HttpStatus.OK);

  }

}
