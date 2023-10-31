function selecionar(btn){
    btn.addEventListener('click', function(){
        var linha = this.closest("tr");
        inputId.value = linha.querySelector(".col-id").innerText;
        inputImg.value = linha.querySelector(".col-img").innerText;
        inputDescricao.value = linha.querySelector(".col-descricao").innerText;
        inputPreco.value = linha.querySelector(".col-preco").innerText;
        
        if(linha.querySelector(".col-tipo").innerText == 'Cerveja'){
            document.getElementById("cerveja").checked = true;
            
        }else if(linha.querySelector(".col-tipo").innerText == 'Drinks'){
            document.getElementById("drinks").checked = true;
        }else if(linha.querySelector(".col-tipo").innerText == 'Porções'){
            document.getElementById("porcoes").checked = true;
        }else if(linha.querySelector(".col-tipo").innerText == 'Sem Álcool'){
            document.getElementById("sem-alcool").checked = true;
        }
        // inputTipo.value = linha.querySelector(".col-tipo").innerText;
        btnHidden();
        hidden = false;
    })
}