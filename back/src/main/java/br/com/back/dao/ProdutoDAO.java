package br.com.back.dao;

import org.springframework.data.repository.CrudRepository;
import br.com.back.modelo.ProdutoModelo;

public interface ProdutoDAO extends CrudRepository <ProdutoModelo, Integer>{
    
}
