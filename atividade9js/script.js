// Atividade 1 – Criando uma matriz
// Crie uma matriz 3x3 contendo números inteiros de 1 a 9 e exiba-a no console.
let matriz1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matriz1);
// Atividade 2 – Acessando elementos
// Mostre no console o número que está na linha 2, coluna 3 da matriz criada na atividade anterior.
console.log(matriz1[1][2]);
// Atividade 3 – Alterando valores
// Altere o número da linha 1, coluna 1 da matriz para o valor 99 e exiba o resultado atualizado.
matriz1[0][0] =99;
console.log(matriz1);
// Atividade 4 – Criando uma matriz com Array.from()
// Crie uma matriz 4x4 preenchida apenas com o número 0 usando o método Array.from().
let matriz2 = Array.from({length: 4}, () => Array.from({length: 4}, () => 0));
// Atividade 5 – Percorrendo a matriz
// Percorra todos os elementos da matriz 3x3 com dois laços for aninhados e mostre no console o valor de cada posição (linha e coluna).
for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1[i].length; j++) {
        console.log("Elemento na linha " + i + ", coluna " + j + ": " + matriz1[i][j]);
    }
}
// Atividade 6 – Somando todos os elementos
// Calcule a soma de todos os números da matriz e mostre o resultado no console.
for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1[i].length; j++) {
        console.log("Elemento na linha " + i + ", coluna " + j + ": " + matriz1[i][j]);
    }
}
// Atividade 7 – Substituindo números pares
// Percorra a matriz e substitua todos os números pares por 0.
let soma = 0;
for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1[i].length; j++) {
        soma += matriz1[i][j];
    }
}
console.log("Soma de todos os elementos da matriz: " + soma);
// Atividade 8 – Matriz de notas
// Crie uma matriz onde cada linha representa um aluno e cada coluna uma nota.
// Calcule e exiba a média de cada aluno.
let matrizNotas = [
    [8, 7, 9],
    [6, 5, 7],
    [10, 9, 8]
];
let somaNotas = 0;
for (let i = 0; i < matrizNotas.length; i++) {
    for (let j = 0; j < matrizNotas[i].length; j++) {
        somaNotas += matrizNotas[i][j];
    }
}
let mediaNotas = somaNotas / (matrizNotas.length * matrizNotas[0].length);
console.log("Média das notas dos alunos: " + mediaNotas);
// Atividade 9 – Matriz com entrada do usuário
// Peça para o usuário digitar os valores de uma matriz 2x2 (usando prompt) e mostre no console a diagonal principal dessa matriz.
let matriz3 = [];
for (let i = 0; i < 2; i++) {
    matriz3[i] = [];
    for (let j = 0; j < 2; j++) {
        matriz3[i][j] = parseInt(prompt("Digite o valor para a posição [" + i + "][" + j + "]: "));
    }
}
console.log("Diagonal principal da matriz:");

// Atividade 10 – Multiplicação dos elementos
// Calcule o produto (multiplicação) de todos os números dentro da matriz 3x3.
let matriz4 = [
    [3,7,9],
    [5,10,1],
    [1,6,8]
]
let produto = 1;
for (let i =0; i < matriz4.length; i++) {
    for (let j =0; j < matriz4[i].length; j++) {
        produto *= matriz4[i][j];
    }
}
console.log("Produto de todos os elementos da matriz: " + produto);