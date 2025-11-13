function olaMundo(){
    console.log("Olá, Mundo!");
}
olaMundo(); 

function saudacao(nome){
    console.log("Olá, " + nome + "!");
}
saudacao(prompt("Digite seu nome:"));

function dobro(numero){
    return numero * 2;
}
console.log(dobro(parseInt(prompt("Digite um número para ver seu dobro:"))));

function soma(a,b){
    return a + b;
}
console.log(soma(parseInt(prompt("Digite o primeiro número para soma:")), parseInt(prompt("Digite o segundo número para soma:"))));

function mostrarMensagem(){
    console.log("Bem-vindo ao JavaScript!");
}
mostrarMensagem();

const multiplica =(x,y) => x *y;
console.log(multiplica(parseInt(prompt("Digite o primeiro número para multiplicação:")), parseInt(prompt("Digite o segundo número para multiplicação:"))));

function media (num1, num2){
    return (num1 + num2) / 2;
}
console.log(media(parseInt(prompt("Digite um número: ")), parseInt(prompt("Digite outro número: "))));

function calcular(a,b){
    const some = a+b;
    const dobro = some *2;
    return dobro;
}
console.log(calcular(parseInt(prompt("Digite um número: ")),parseInt(prompt("Digite outro número: "))));

function parOuImpar(num){
    if (num % 2 === 0){
        console.log("O número " + num + " é par.");
    } else {
        console.log("O número " + num + " é ímpar.");
    }
}
parOuImpar(parseInt(prompt("Digite um número para verificar se é par ou ímpar:")));

function converterEmHoras(minutos){
    return minutos / 60;
}
console.log(converterEmHoras(parseInt(prompt("Digite o número de minutos para converter em horas:"))));