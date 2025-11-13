//1.
let pessoa={
    nome: "Rafael",
    idade:16,
    cidade:"Santa Maria RS"
}
console.log(pessoa.nome, pessoa.idade, pessoa.cidade);
//2.
pessoa.cidade ="Santa Cruz do Sul RS"
pessoa.profissao="Estudante"
console.log(pessoa.nome, pessoa.idade, pessoa.cidade, pessoa.profissao);
//3.
let carro={
    marca:"Ford",
    modelo:"Ka",
    ano:2020,
    ligar: function(){
        console.log("O carro "+this.marca+" " +this.modelo+ " está ligado.");
    }
}
carro.ligar();
//4.
let usuario={
    nome:"Rafael",
    idade:16,
    verificarIdade: function(){
        if(this.idade >=18){
            console.log("Maior de idade");
        } else {
            console.log("Menor de idade");
        }
    }
}
usuario.verificarIdade();
//5.
let aluno={
    nome:"Rafael",
    notas:[9,8,10],
    media:function(){
        let soma=0;
        for(let i = 0; i< this.notas.length;i++){
            soma+= this.notas[i];
        }
        let media = soma / this.notas.length;
        console.log(this.nome+ " tem a média: " + media);
    }
}
aluno.media();
//6.
let produtos=[
    {nome:"Caneta",
    preco:2.5
    },
    {nome:"TV",
    preco:900
    }
]
for(let i in produtos){
    console.log("Produto: " + produtos[i].nome + ", Preço: " + produtos[i].preco);
}
//7.
for(let i in produtos){
    if(produtos[i].preco > 50){
        console.log("Produto caro: " + produtos[i].nome);
    }
}
//8.
let filme={
    titulo:"Como Treinar seu Dragão",
    ano:2010
}
function mostrarFilme(filme){
    console.log("Título: " + filme.titulo + ", Ano: " + filme.ano);
}
mostrarFilme(filme);
//9.
let empresa={
    nome:"Tech Solutions",
    endereco:{
        rua:"Av. Central",
        numero:1000,
        cidade:"São Paulo"
    }
}
console.log("Empresa: " + empresa.nome + ", Rua: " + empresa.endereco.rua);
//10.
let produto={
    nome:"Notebook",
    preco:2500,
    estoque:10,
    vender:function(){
        console.log("Venda realizada! Estoque: " + (this.estoque-=1));
    }
}
for(let i =produto.estoque;i>0;i--){
 produto.vender();
}