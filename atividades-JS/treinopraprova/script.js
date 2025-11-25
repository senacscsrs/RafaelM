let nota1=document.getElementById('n1');
let nota2=document.getElementById('n2');
let nota3=document.getElementById('n3');
let resultado=document.getElementById('resultado');
let status0=document.getElementById('status')
document.getElementById('submit').addEventListener('click', calcularMedia);
function calcularMedia(){
    let media = (parseFloat(nota1.value)+parseFloat(nota2.value)+parseFloat(nota3.value))/3;
    resultado.innerHTML="A média é "+media;
    if(media >=7){
        status0.innerHTML="Você está APROVADO";
    } else{
        status0.innerHTML="Você está REPROVADO";
    }
    
}
document.getElementById('btnTrocaCor').addEventListener('click',trocaCorFundo);
function trocaCorFundo(){
    if(document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor="black";
    }else{
        document.body.style.backgroundColor="white";
    }
}