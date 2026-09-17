const somar = (...numeros) => numeros.reduce((acc, num) => acc + num, 0);

console.log(somar(10, 20, 30));
