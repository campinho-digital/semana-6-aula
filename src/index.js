// Lista de produtos disponíveis com nome e preço.
const produtosDisponiveis = [
    { codigo: 1, nome: "Trufa", preco: 4.99 },
    { codigo: 2, nome: "Tablete", preco: 4.99 },
    { codigo: 3, nome: "Barra", preco: 22.99 },
    { codigo: 4, nome: "Biscoito trufado", preco: 29.99 },
    { codigo: 5, nome: "Fondue", preco: 55.00 },
    { codigo: 6, nome: "Caixa de chocolate", preco: 85.00 }
];

// Carrinho de compras como um array de objetos.
let carrinho = [];

let executar = true;

//Crio função para adicionar produto ao carrinho.
function adicionarProdutoCarrinho(produto, quantidade) {
    // Crio while para definir quantidade de produto e adicionar ao carrinho.
    let contador = 0;
    while (contador < quantidade) {
        carrinho.push(produto);
        contador++;
    }
}

alert('Bem-vindo a Fábrica Cacaulate!');

while (executar = true) {
    // Funcionalidade: Seleção de produtos.
    let produtoSelecionado = parseInt(prompt('Deseja comprar algum produto? Digite o nrº referente ao produto: 1-Trufa, 2-Tablete, 3-Barra, 4-Biscoito trufado, 5-Fondue, 6-Caixa de chocolate.'));
    // Identificar produto digitado pelo usuário e procurar na lista de produtos disponíveis.
    let produto = produtosDisponiveis.find(produtoAssociado => produtoAssociado.codigo == produtoSelecionado);
    // Mostrar o preço do produto selecionado e selecionar a quantidade desejada do produto.
    let quantidade = parseInt(prompt(`${produto.nome} - R$ ${produto.preco}/unidade.\nSelecione a quantidade desejada do produto:`));
    // Chamo a função para adicionar a quantidade de produto no carrinho.
    adicionarProdutoCarrinho (produto, quantidade);
    // Crio constante utilizando a função do próprio JS "confirm", que utiliza o artefato "ok"(true) e "cancelar"(false) associado ao booleano, permitindo que a resposta do usuário retorne e possa ser feito algo diante dela.
    const adicionarMaisProdutos = confirm(`Você adicionou ${quantidade}x ${produto.nome} ao seu carrinho!\nDeseja adicionar mais produtos?`);
    console.log(adicionarMaisProdutos)
    if (adicionarMaisProdutos == true) {
        continue;
    } else {
        break;
    }
}
console.log(carrinho);

//Funcionalidade - Vizualizar carrinho (a ser desenvolvida).
