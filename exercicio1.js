
const prompt = require("prompt-sync")()
/*1) Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/

let numberWhole = parseInt(prompt("Digite um número inteiro: "))

if(numberWhole % 2 === 0 ){
    console.log(`O numero ${numberWhole} é um número par.`)
    
    }else{
     console.log(`O numero ${numberWhole} é um numero impar.`)
    }
    
   