// ===============================
// Exercícios sobre Variáveis e Console.log
// ===============================
/*1.*/
let nome = "Rafael";
let idade = 16;
let gostaProgramar = true;
console.log(nome, idade, gostaProgramar);
/*2.*/
let fruta = "maçã";
console.log("Fruta inicial:", fruta);
fruta = "banana";
console.log("Fruta depois:", fruta);
/*3.*/
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
/*4.*/
let cidade = "Santa Cruz do Sul";
let estado = "RS";
console.log("Eu moro em " + cidade + ", " + estado);
/*5.*/
console.log(`Eu moro em ${cidade}, ${estado}`);
/*6.*/
let produto = "Camisa";
let preco = 59.90;
console.log("Produto:", produto, "Preço:", preco);
/*7.*/
let textoQuebra = "Linha 1\nLinha 2";
console.log(textoQuebra);
/*8.*/
let simbolo = "\u00A9";
console.log(simbolo);


// ===============================
// Exercícios sobre If / Else
// ===============================
/*9.*/
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
/*10.*/
let idadePessoa = 17;
if (idadePessoa >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
/*11.*/
let senha = "1234";
if (senha === "1234") {
    console.log("Acesso permitido");
} else {
    console.log("Senha incorreta");
}
/*12.*/
let numero = -5;
if (numero > 0) {
    console.log("Número positivo");
} else if (numero < 0) {
    console.log("Número negativo");
} else {
    console.log("Número neutro");
}
/*13.*/
let num1 = 10;
let num2 = 20;
if (num1 > num2) {
    console.log("Maior:", num1);
} else if (num2 > num1) {
    console.log("Maior:", num2);
} else {
    console.log("Os números são iguais");
}


// ===============================
// Exercícios sobre Switch
// ===============================
/*14.*/
let diaSemana = 3;
switch (diaSemana) {
    case 1: 
    console.log("Domingo"); 
    break;
    case 2: 
    console.log("Segunda"); 
    break;
    case 3: 
    console.log("Terça"); 
    break;
    case 4: 
    console.log("Quarta"); 
    break;
    case 5: 
    console.log("Quinta"); 
    break;
    case 6: 
    console.log("Sexta"); 
    break;
    case 7: 
    console.log("Sábado"); 
    break;
    default: 
    console.log("Dia inválido");
}
/*15.*/
let corSemaforo = "verde";
switch (corSemaforo) {
    case "vermelho": 
    console.log("Pare"); 
    break;
    case "amarelo": 
    console.log("Atenção"); 
    break;
    case "verde": 
    console.log("Siga"); 
    break;
    default: 
    console.log("Cor inválida");
}
/*16.*/
let notaConceito = "B";
switch (notaConceito) {
    case "A": 
    console.log("Excelente"); 
    break;
    case "B": 
    console.log("Muito bom"); 
    break;
    case "C": 
    console.log("Bom"); 
    break;
    case "D": 
    console.log("Regular"); 
    break;
    case "F": 
    console.log("Reprovado"); 
    break;
    default: 
    console.log("Nota inválida");
}
/*17.*/
let mes = 12;
switch (mes) {
    case 1: 
    console.log("Janeiro"); 
    break;
    case 2: 
    console.log("Fevereiro");
     break;
    case 3: 
    console.log("Março"); 
    break;
    case 4: 
    console.log("Abril"); 
    break;
    case 5: 
    console.log("Maio"); 
    break;
    case 6: 
    console.log("Junho"); 
    break;
    case 7: 
    console.log("Julho"); 
    break;
    case 8: 
    console.log("Agosto"); 
    break;
    case 9: 
    console.log("Setembro"); 
    break;
    case 10: 
    console.log("Outubro"); 
    break;
    case 11: 
    console.log("Novembro"); 
    break;
    case 12: 
    console.log("Dezembro"); 
    break;
    default: 
    console.log("Mês inválido");
}


// ===============================
// Exercícios sobre For
// ===============================
/*18.*/
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
/*19.*/
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log("Fogo!");
/*20.*/
let numeroTabuada = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
}
/*21.*/
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}
/*22.*/
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log("Soma de 1 a 100:", soma);


// ===============================
// Exercícios sobre While
// ===============================
/*23.*/
let contador = 0;
while (contador <= 5) {
    console.log(contador);
    contador++;
}
/*24.*/
let saldo = 100;
while (saldo > 0) {
    console.log("Saldo atual:", saldo);
    saldo -= 10;
}
/*25.*/
let impar = 1;
while (impar <= 20) {
    if (impar % 2 !== 0) {
        console.log(impar);
    }
    impar++;
}
/*26.*/
let tentativaSenha = "";
let senhaCorreta = "abcd";
while (tentativaSenha !== senhaCorreta) {
    console.log("Tentando senha...");
    tentativaSenha = "abcd";
}
console.log("Senha correta! Acesso liberado");


// ===============================
// Exercícios sobre Do/While
// ===============================
/*27.*/
let tentativa = "";
do {
    tentativa = "1234";
} while (tentativa !== "1234");
console.log("Senha aceita");
/*28.*/
let x = 0;
do {
    console.log(x);
    x++;
} while (x <= 3);
/*29.*/
let opcao = "";
do {
    opcao = "sair";
    console.log("Menu: 1-Opção A | 2-Opção B | sair");
} while (opcao !== "sair");
console.log("Saiu do menu");
/*30.*/
let y = 1;
do {
    console.log(y);
    y++;
} while (y <= 5);
