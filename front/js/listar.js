function pegaHTML(){
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accepted": "application/json"
        }
    })
        .then(resposta => resposta.json())
        .then(produtos => preencherTabela(produtos))
        .catch(erro => console.log("ocorreu um erro" + erro))
}



function preencherTabela(produtos) {
    produtos.forEach(produto => {
        inserirProduto(produto);
    });
}



function inserirProduto(produto) {
    var novaLinha = document.createElement("tr");
    var colId = document.createElement("td");
    var colDescricao = document.createElement("td");
    var colPreco = document.createElement("td");
    var colTipo = document.createElement("td");
    var colSelecionar = document.createElement("td");

    colId.classList.add('col-id');
    colId.innerText = produto.id;

    var colImg = document.createElement("td");
    var img = document.createElement("img");
    img.src = "data:img/jpg;base64," + produto.img;
    colImg.classList.add('col-img');
    colImg.appendChild(img);

    
    colDescricao.classList.add('col-descricao');
    colDescricao.innerText = produto.descricao;

    colPreco.classList.add('col-preco');
    colPreco.innerText = "R$" + produto.preco;

    colTipo.classList.add("col-tipo");
    if (produto.tipo === 1) {
        colTipo.innerText = 'Cerveja';
    } else if (produto.tipo === 2) {
        colTipo.innerText = 'Drinks';
    } else if (produto.tipo === 3) {
        colTipo.innerText = 'Porções';
    } else if (produto.tipo === 4) {
        colTipo.innerText = 'Sem alcool';
    }

    var btn = document.createElement("button");
    btn.classList.add("btn", "btn-success");
        btn.innerText = "Selecionar";
        colSelecionar.appendChild(btn);
        
        novaLinha.appendChild(colId);
        novaLinha.appendChild(colImg);
        novaLinha.appendChild(colDescricao);
        novaLinha.appendChild(colPreco);
        novaLinha.appendChild(colTipo);
        novaLinha.appendChild(colSelecionar);
        
        document.querySelector("tbody").appendChild(novaLinha);
        selecionar(btn);
    }
    pegaHTML();
    