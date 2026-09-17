const produto = {
    nome: 'Mouse',
    preco: 80,
};

const mostrarProduto = (item) => {
    const { nome, preco } = item;
    return `Produto: ${nome} - Preço: R$ ${preco}`;
};

console.log(mostrarProduto(produto));
