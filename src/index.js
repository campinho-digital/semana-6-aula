// Produtos disponíveis
const produtosDisponiveis = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 100 },
  { nome: "Sapato", preco: 150 },
  { nome: "Boné", preco: 25 }
];

// Carrinho de compras
let carrinho = [];

// Função para adicionar produtos ao carrinho
function adicionarProduto() {
  let mensagem = "Escolha um produto para adicionar ao carrinho:\n";
  
  /* Montar lista de produtos
  ria uma lista numerada dos produtos e dos preços
  mostra ao usuário quando ele for escolher um produto */
  produtosDisponiveis.forEach((produto, index) => {
      mensagem += `${index + 1}. ${produto.nome} - R$${produto.preco}\n`;
  });
  
  // Capturar escolha do usuário
  const escolha = parseInt(prompt(mensagem)) - 1;
  
  // Verificar se a escolha é válida
  if (escolha >= 0 && escolha < produtosDisponiveis.length) {
      const produto = produtosDisponiveis[escolha];
      const quantidade = parseInt(prompt(`Quantas unidades de ${produto.nome}?`));
      
      // Se a quantidade for válida, adicionar ao carrinho
      if (quantidade > 0) {
          let itemCarrinho = carrinho.find(item => item.nome === produto.nome);
          
          // Se o produto já estiver no carrinho, atualizar a quantidade
          if (itemCarrinho) {
              itemCarrinho.quantidade += quantidade;
              itemCarrinho.subtotal = itemCarrinho.quantidade * itemCarrinho.preco;
          } else {
              // Se for novo no carrinho, adicionar o item
              carrinho.push({
                  nome: produto.nome,
                  preco: produto.preco,
                  quantidade: quantidade,
                  subtotal: quantidade * produto.preco
              });
          }
          alert(`${quantidade} unidade(s) de ${produto.nome} adicionada(s) ao carrinho.`);
      } else {
          alert("Quantidade inválida.");
      }
  } else {
      alert("Escolha inválida.");
  }
}

// Função para visualizar o carrinho
function visualizarCarrinho() {
  if (carrinho.length === 0) {
      alert("Carrinho vazio.");
      return;
  }

  let mensagem = carrinho.map(item => `${item.nome} - R$${item.preco} x ${item.quantidade} = R$${item.subtotal}`).join("\n");
  let total = carrinho.reduce((soma, item) => soma + item.subtotal, 0);
  
  alert(`${mensagem}\n\nTotal: R$${total.toFixed(2)}`);
}

// Lógica principal
while (true) {
  const acao = prompt("Escolha uma ação:\n1. Adicionar Produto\n2. Visualizar Carrinho\n3. Sair");

  if (acao === "1") {
      adicionarProduto();
  } else if (acao === "2") {
      visualizarCarrinho();
  } else if (acao === "3") {
      break; // Sair do loop
  } else {
      alert("Opção inválida.");
  }
}