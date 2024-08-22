let frutas = ['Maçã' , 'Banana', 'Pera'];

console.log(frutas[2]);

frutas.push('Manga');
console.log(frutas);

frutas.pop(frutas);
console.log(frutas);

frutas.shift(frutas);
console.log(frutas);

frutas.unshift('Morango');
console.log(frutas);
console.log(frutas.length);

frutas.splice(2,0,90);
console.log(frutas);
console.log(frutas[frutas.length-1]);