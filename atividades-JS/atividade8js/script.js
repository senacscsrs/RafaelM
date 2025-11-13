//1.
let nome01 = prompt("Digite seu nome:");
console.log("Olá, "+nome01+"! Seja bem-vindo ao JavaScript!");
//2.
let idade = prompt("Digite sua idade:");
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
//3.
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let media = (nota1 + nota2) / 2;
if (media >= 7) {
    console.log("Aprovado com média: " + media);
} else if (media >= 5) {
    console.log("Recuperação com média: " + media);
}else {
    console.log("Reprovado com média: " + media);
}
//4.
let salario = parseFloat(prompt("Digite seu salário:"));
let bonus = 15/100;
console.log("Seu salário com bônus é: " + (salario + (salario * bonus)));
//5.
let nomeProduto = prompt("Digite o nome do produto:");
let precoProduto = parseFloat(prompt("Digite o preço do produto:"));
let desconto = 10/100;
if (precoProduto > 100) {
    console.log("O preço do produto " + nomeProduto + " com desconto é: " + (precoProduto - (precoProduto * desconto)));
} else {
    console.log("O preço do produto " + nomeProduto + " é: " + precoProduto);
}
//6.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//7.
let numero2;
while (numero2 <=20){
    console.log(numero2);
    numero2+=2;
}
//8.
let tabuada = parseInt(prompt("Digite um número para ver a tabuada:"));
for (let i = 1; i <=10; i++) {
    console.log(tabuada + " x " + i + " = " + (tabuada * i));
}
//9.
let numero3 = parseInt(prompt("Digite um número:"));
if(numero3 % 2 === 0) {
    console.log("O número é par.");
}else {
    console.log("O número é ímpar.");
}
//10.
let login = prompt("Digite seu login:");
let senha2 = prompt("Digite sua senha:");
if (login === "admin" && senha2 === "1234") {
    console.log("Acesso permitido.");
} else {
    console.log("Acesso negado.");
}
//11.
let km = parseFloat(prompt("Digite a distância em km:"));
let valorPorKm = 2.5;
let valorBase = 5;
console.log("O valor da corrida é: " + (valorBase+(km * valorPorKm)));
//12.
let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva", "abacaxi");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
//13.
let numeros = [10, 20, 30, 40, 50];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
    console.log("numero é " +numeros[i]+ ", posião é "+ i);
    }
}
//14.
//.----
let nomeCompleto = prompt("Digite seu nome completo:");
let partesNome = nomeCompleto.split(" ");
for (let i = partesNome.length - 1; i >= 0; i--) {
    console.log(partesNome[i]);
}