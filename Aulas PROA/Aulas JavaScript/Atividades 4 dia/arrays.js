let frutas = ["Maçã", "Banana", "Pera"];

console.log("Array Original");
console.log(frutas);
console.log("-------------");

console.log("Item especifico da Array");
console.log(frutas[2]);
console.log("-------------");

console.log('Inserindo item "Manga" no Array');
frutas.push("Manga");
console.log(frutas);
console.log("-------------");

console.log("Retirando ultimo item do Array");
frutas.pop(frutas);
console.log(frutas);
console.log("-------------");

console.log("Retirando primeiro item do Array");
frutas.shift(frutas);
console.log(frutas);
console.log("-------------");

console.log("Coloca o elemento no primeiro lugar da Array");
frutas.unshift("Morango");
console.log(frutas);

console.log("Coleta o tamanho do array");
console.log(frutas.length);

console.log(
  "Coloca item no lugar especifico da Array (Indice, Quantos itens serão removidos, Item)"
);
frutas.splice(2, 0, 90);
console.log(frutas);

console.log("Imprime ultimo item do Array");
console.log(frutas[frutas.length - 1]);