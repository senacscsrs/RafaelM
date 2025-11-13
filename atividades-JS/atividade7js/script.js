//1.
let frase = "O JavaScript é divertido";
console.log(frase.length);
console.log(frase.slice(15));
//2.
let nome = "Rafael";
console.log(nome.toUpbperCase());
console.log(nome.toLowerCase());
//3.
let animal = "O gato dorme muito";
console.log(animal.replace("gato", "cachorro"));
//4.
let palavra = "Estou aprendendo JavaScript";
if (palavra.includes("JavaScript")) {
    console.log("Achei a palavra!");
} else {
    console.log("Não achei");
}
//5.
let fruta = "maçã";
switch (fruta) {
    case "maçã":
        console.log("Fruta vermelha");
        break;
    case "banana":
        console.log("Fruta amarela");
        break;
    case "uva":
        console.log("Fruta roxa");
        break;
    default:
        console.log("Fruta desconhecida");
        break;
}
//6.
let palavra2 = "Aprender";
for (let i = 0; i < palavra2.length; i++) {
    console.log(palavra2[i]);
}
//7.
let senhaCorreta = "1234";
let senhaInformada;
do {
    senhaInformada = "1234";
} while (senhaInformada !== senhaCorreta);
console.log("Senha correta!");  
//8.
let saldoDePassagens = 5;
while (saldoDePassagens > 0) {
    console.log(`Usei 1 passagem. Restam passagens: ${saldoDePassagens}`);
    saldoDePassagens--;
}
console.log("Acabaram as passagens!");
//9.
let numero = 7;
if (numero % 2 === 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}
//10.
let texto = "O rato roeu a roupa do rei de Roma";
let palavra3 = texto.split(" ");
for(let i = 0; i < palavra3.length; i++) {
    console.log(palavra3[i]);
}
//11.
let nomesColegas = ["Rawi", "João", "Murilo", "Dudu", "Vini"];
for (let i = 0; i < nomesColegas.length; i++) {
    console.log(nomesColegas[i]);
}
//12.
let numero1 = [1, 2, 3, 4, 5];
let soma = 0;
for (let i = 0; i < numero1.length; i++) {
    soma += numero1[i];
}
console.log(soma);
//13.
let itensSupermercados = ["feijão", "arroz", "leite"];
itensSupermercados.push("ovo", "carne");
for (let i = 0; i < itensSupermercados.length; i++) {
    console.log(itensSupermercados[i]);
}
//14.
let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
let hoje = new Date();
let indiceDia = hoje.getDay();
console.log(diasDaSemana[indiceDia]);
//15.
let notas = [10, 9, 8, 10, 6];
let soma2 = 0;
for (let i = 0; i < notas.length; i++) {
    soma2 += notas[i];
}
let media = soma2 / notas.length;
console.log(media);