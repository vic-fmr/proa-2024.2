
for(let t = 10; t <= 20; t++){
    console.log('numero: ' + t);
}

console.log('-------------')

let i = 10

while(i<=20){
    console.log(i)
    i++;
}

console.log('-------------')


let text = ""
let n = 0;

do{
    text = "O numero é " + n;
    console.log(text);
    n ++;
}
while(n < 0);


console.log('-------------')


let palavras = ['figma' , 'palavra' , 'java' , 'galinha'];

for(let i of palavras){
    console.log(i);
}

console.log('-------------')

for(let t = 10; t <= 20; t++){
    if(t==14){
        break;
    }
    console.log('numero: ' + t);
}

console.log('-------------')

for(let t = 10; t <= 20; t++){
    if(t==14){
        console.log('Numero ignorado');
        continue;
    }
    console.log('numero: ' + t);
}

