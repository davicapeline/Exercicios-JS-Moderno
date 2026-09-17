const notebook = {
    marca: 'Samsung',
    modelo: 'Galaxy Book',
    preco: 3500,
    desconto: 500,
};

const { marca, modelo, preco, desconto } = notebook;

const calcularPrecoFinal = (preco, desconto) => preco - desconto;

const precoFinal = calcularPrecoFinal(preco, desconto);

console.log(`Notebook ${marca} ${modelo}`);
console.log(`Preço original: R$ ${preco}`);
console.log(`Desconto: R$ ${desconto}`);
console.log(`Preço final: R$ ${precoFinal}`);
