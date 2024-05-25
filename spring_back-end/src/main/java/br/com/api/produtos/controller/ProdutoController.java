package br.com.api.produtos.controller;

import org.springframework.web.bind.annotation.RestController;

import br.com.api.produtos.models.ProdutoModel;
import br.com.api.produtos.models.RespostaModel;
import br.com.api.produtos.services.ProdutoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "*") // http://localhost:3000
public class ProdutoController {
  

  @Autowired
  private ProdutoService ps;

  @PostMapping("/cadastrar")
  public ResponseEntity<?> cadastrar(@RequestBody ProdutoModel pm){
    return ps.cadastrar(pm);
  }

  @PutMapping("/alterar")
  public ResponseEntity<?> alterar(@RequestBody ProdutoModel pm) {
    return ps.alterar(pm);
  }

  @DeleteMapping("/remover/{id}")
  public ResponseEntity<RespostaModel> remover(@PathVariable long id){
    return ps.remover(id);
  }
  

  @GetMapping("/listar")
  public Iterable<ProdutoModel> listar(){
    return ps.listar();
  }
  
  

  @GetMapping("/")
  public String rota(){
    return "API de produtos funcionando";
  }

}
