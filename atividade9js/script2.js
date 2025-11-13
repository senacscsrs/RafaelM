//1
let cores = ["azul","preto","branco","vermelho"];
for(let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}
//2.
let numeros = [1,2,3,4,5,6];
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        console.log(numeros[i]);
    }
}
//3.
let numeros2 = [10,20,30,40,50];
let soma = 0;
for(let i = 0; i<numeros2.length; i++){
    soma += numeros2[i];
}
console.log(soma);
//4.
let numeros3 = [300,10,15,20,25];
let maior = numeros3[0];
for(let i = 1; i < numeros3.length; i++){
    if(numeros3[i] > maior){
        maior = numeros3[i];
    }
}
console.log(maior);
//5.
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        console.log(matriz[i][j]);
    }
}
//6.
for (let i = 0; i < 3; i++) {
  console.log(matriz[i][i]);
}
//7.
let matriz2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let soma2 = 0;
for(let i =0; i< matriz2.length; i++){
    for(let j =0; j< matriz2[i].length; j++){
        soma2 += matriz2[i][j];
    }
}
console.log(soma2);
//8.
for(let i = 0; i <3; i++){
    let somaLinha = 0;
    for(let j =0; j <3; j++){
        somaLinha += matriz[i][j];
    }
    console.log(somaLinha);
}
//9.
let alunos= ["João","Pedro","Rawi"];
let notas = [
    [7,8,9],
    [6,5,4],
    [10,9,8]
];
for(let i = 0; i < alunos.length; i++){
    let somaNotas = 0;
    for(let j = 0; j < notas[i].length; j++){
        somaNotas += notas[i][j];
    }   
    let media = somaNotas / notas[i].length;
    console.log("Aluno: " + alunos[i] + ", Média: " + media);
}
//10.
let matriz3 = [
    [2,4,6],
    [1,3,5],
    [7,9,8]
];
for(let i = 0; i < matriz3.length; i++){
    for(let j = 0; j < matriz3[i].length; j++){
        console.log(matriz3[i][j]);
    }
}
//Desafio EXTRA
for(let i = 0; i < matriz3.length; i++){
    for(let j = 0; j < matriz3[i].length; j++){
        if (matriz3[i][j]> 5 ){
            console.log("Número maior ou igual a 5: " + matriz3[i][j]);
        }
    }
}

