console.log("Hello World");

// Lista de produtos disponíveis com nome e preço
//const produtosDisponiveis = [
// { nome: "Camisa", preco: 50.0 },
// { nome: "Calça", preco: 100.0 },
// { nome: "Sapato", preco: 150.0 },
//{ nome: "Boné", preco: 25.0 },

// Carrinho de compras como um array de objetos
//let carrinho = [];

// Lista de produtos disponíveis com nome e preço.
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

// Funcionalidade - Visualizar Carrinho.
// Crio a função para visualizar carrinho.
function visualizarCarrinho() {
  console.log(carrinho);
  let valorSubtotal = carrinho.map(item => `${item.nome} - R$${item.preco} x ${item.quantidade} = R$${item.subtotal}`).join("\n");
  let total = carrinho.reduce((acumulador, item) => acumulador + item.subtotal, 0);
  let valorTotal = total.toFixed(2);
  alert(`Valor total do seu carrinho:\n\n${valorSubtotal}\n\nValor total = R$ ${valorTotal}.`);
  console.log(valorSubtotal);
  console.log(valorTotal);
  // Adicionar forma de pagamento depois.
  alert('Obrigada por escolher a Cacaulate! Até a próxima!');
};

// Mensagem de boas vindas.
alert('Bem-vindo a Fábrica Cacaulate!');

while (executar = true) {
  // Funcionalidade: Seleção de produtos.
  let produtoSelecionado = parseInt(prompt('Deseja comprar algum produto? Digite o número correspondente: \n1-Trufa \n2-Tablete \n3-Barra \n4-Biscoito trufado \n5-Fondue \n6-Caixa de chocolate'));

  // Identificar produto digitado pelo usuário e procurar na lista de produtos disponíveis.
  let produto = produtosDisponiveis.find(produtoAssociado => produtoAssociado.codigo == produtoSelecionado);
  console.log("Produto escolhido: ", produto);    
  if (!produto) {
      alert("Produto não encontrado. Por favor, escolha um produto válido.");
      continue;
  };

  // Mostrar o preço do produto selecionado e selecionar a quantidade desejada.
  let quantidade = parseInt(prompt(`${produto.nome} - R$ ${produto.preco}/unidade.\nSelecione a quantidade desejada do produto:`));
  console.log('Quantidade escolhida: ', quantidade);
  if (isNaN(quantidade) || quantidade <= 0) {
      alert("Quantidade inválida. Por favor, tente novamente.");
      continue;
  };

  // Crio atributo dentro do objeto para inserir informação da quantidade de cada produto e o subtotal do mesmo.
  produto.quantidade = quantidade;
  produto.subtotal = produto.preco * produto.quantidade;
  console.log('Quantidade do produto para cálculo: ', produto.quantidade);

  // Usar o find e o forEach para somar a quantidade e recalcular o subtotal de um produto que já existe no carrinho.
  let produtoNoCarrinho = carrinho.find(item => item.nome === produto.nome);
  if (produtoNoCarrinho) {
      // Se o produto já estiver no carrinho, soma a quantidade e recalcula o subtotal.
      produtoNoCarrinho.quantidade += quantidade;
      produtoNoCarrinho.subtotal = produtoNoCarrinho.preco * produtoNoCarrinho.quantidade;
  } else {
      // Adiciona o novo produto ao carrinho (fazendo uma cópia do produto para evitar alterar a lista original).
      carrinho.push({
          codigo: produto.codigo,
          nome: produto.nome,
          preco: produto.preco,
          quantidade: quantidade,
          subtotal: produto.preco * quantidade
      });
  };

  // Crio constante utilizando a função do próprio JS "confirm", que utiliza o artefato "ok"(true) e "cancelar"(false) associado ao booleano, permitindo que a resposta do usuário retorne e possa ser feito algo diante dela.
  const adicionarMaisProdutos = confirm(`Você adicionou ${quantidade}x ${produto.nome} ao seu carrinho!\nDeseja adicionar mais produtos?`);
  if (adicionarMaisProdutos == true) {
      continue;
  } else {
      // Chamar função para visualizar carrinho aqui para dar continuidade.
      // visualizarCarrinho();
      executar = false;
      visualizarCarrinho();
      break;
  };
};