console.log("Itens do carrinho");

// Lista de produtos disponíveis com nome e preço
const produtosDisponiveis = [
  { nome: "Camisa", preco: 50.0  }, // 0
  { nome: "Calça",  preco: 100.0 }, // 1
  { nome: "Sapato", preco: 150.0 }, // 2 
  { nome: "Boné",   preco: 25.0  }, // 3
];

// Carrinho de compras como um array de objetos
let carrinho = [];


// console.log´s para testar a saída de cada objeto da const produtosDisponiveis

  // console.log (produtosDisponiveis[0]);
  // console.log (produtosDisponiveis[2]);
  // console.log (produtosDisponiveis[3]);
  // console.log (produtosDisponiveis[1]);


// push e console.log para testar a adição de itens ao carrinho

// carrinho.push (produtosDisponiveis[3]);
// console.log(carrinho);




function totalCart() {
  let total = 0;
  for (let i = 0; i < carrinho.length; i++) {
    total += carrinho[i].preco;
  }
  alert(`O total do carrinho é: R$ ${total.toFixed(2)}`);
  console.log(`O total do carrinho é: R$ ${total.toFixed(2)}`);
}

// função para adicionar itens ao carrinho

function addToCart() {

  // variavel para definir o loop da estrutura while
  let continuar = true;

  // estrutura while que vai fazer um loop ate que o usuário diga que não quer mais adicionar itens ao carrinho
  while (continuar === true) {

    let nomedoProduto = prompt("Qual dos produtos você deseja adicionar: Camisa, Calça, Sapato ou Boné?").toUpperCase();
    // Julli falou para utilizar um método touppercase para verificar os itens
    const produtoEncontrado = produtosDisponiveis.find(produto => produto.nome.toUpperCase() === nomedoProduto);
    
    continuar = confirm(`Adicionar novo produto? s/n`);

    // Após verificar, precisamos utilizar o método push para adicionar o que a pessoa escreveu no prompt na minha let carrinho
    if (produtoEncontrado) {
      carrinho.push(produtoEncontrado);
      alert(`${produtoEncontrado.nome} foi adicionado ao carrinho.`);
    } else {
      continuar = prompt("Produto não encontrado. Tentar novamente? s/n");
    }
  }
  console.log(carrinho);
  cartInfo();
  totalCart(); 
}


addToCart();

function cartInfo() {
  let info = "Itens no carrinho:\n";
  for (let i = 0; i < carrinho.length; i++) {
    info += `${carrinho[i].nome}: R$ ${carrinho[i].preco}\n`;
  }
  alert(info);
}

