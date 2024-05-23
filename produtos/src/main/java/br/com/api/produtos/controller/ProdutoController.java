package br.com.api.produtos.controller;

import org.springframework.web.bind.annotation.RestController;

import br.com.api.produtos.models.ProdutoModel;
import br.com.api.produtos.services.ProdutoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
public class ProdutoController {
  

  @Autowired
  private ProdutoService ps;

  @GetMapping("/listar")
  public Iterable<ProdutoModel> listar(){
    return ps.listar();
  }
  
  

  @GetMapping("/")
  public String rota(){
    return "API de produtos funcionando";
  }

}
