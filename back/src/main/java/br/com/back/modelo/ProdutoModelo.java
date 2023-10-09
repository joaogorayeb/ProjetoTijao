package br.com.back.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name = "produtos")
@Entity

public class ProdutoModelo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String descricao;
    private double preco;
    
    @Lob
    @Column(name = "img", columnDefinition = "LONGBLOB")
    private byte[] img;
    private Integer tipo;
}
