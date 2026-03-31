//declaraçoes e variaveis

//var, let e const

//var xpto=10;
//console.log(xpto);
//var xpto=20;
//console.log(xpto);
//var - pode redeclarar e acessar fora do escopo
//let nao pode redeclarar e nao consegue acessar fora do escopo
//if(true){
//    var nome="fiap";
//}
//console.log(nome)

//const
// const taxaJuros =0.85
//taxaJuros =0.50;
//console.log(taxaJuros);

// var exemplo1="ola dev var";
// console.log(exemplo1);

// let exemplo2="ola dev let";
// console.log(exemplo2);

// const exemplo3="ola dev const";
// console.log(exemplo3);

// let exemplo4="20";
// console.log(exemplo4);

// let exemplo5=true;
// console.log(exemplo5)

// let exemplo6={nome:"fiap"};
// console.log(exemplo6)

// let exemplo7=["java","python","C#"]
// console.log(exemplo7);
// //variavel indefinida
// let exemplo8;
// console.log(exemplo8);

// let exemplo9=null;
// console.log(exemplo9)

//OPERADORES ARITMÉDICOS

const valor1=20;
const valor2=10;
console.log(valor1 + valor2);
console.log(valor1 / valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
    
//OPERADORES LÓGICOS

console.log(valor1 > valor2);
console.log(valor1 > 10 && valor2 != 20)
console.log(valor2 > 5 || valor1 > 50)

//OPERADORES DE COMPARAÇAO
console.log(valor1 < valor2);
console.log(valor1 >= valor2);
console.log(valor1 <= valor1);
console.log(valor1 != valor2);
console.log(valor1 == valor2);
console.log(valor1 === valor2);
console.log("o valor é", valor2);

//1) EXERCICIO

//Utilizando as variáveis p (preço do produto) e  v(valor do desconto), crie uma nova variável 
//chamada precoFinal que subtraia o desconto do preço e exiba o resultado. 

const p=20;
const v=10;
const precofinal = p - v;
console.log("o preço final com desconto é:", precofinal)

//2)

//Verificação de Segurança (Login e Token)
//No banco, para autorizar uma transação, precisamos que o usuário esteja logado e que o token de segurança seja válido.

const usuariologado=1;
const token=100;
const TransacaoAutorizada = usuariologado === 1 && token >=10;
console.log("transaçao autorizada com sucesso", TransacaoAutorizada);