
const prompt = require("prompt-sync")()
/*1) Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/

let numberWhole = parseInt(prompt("Digite um número inteiro: "))

if (numberWhole % 2 === 0) {
    console.log(`O numero ${numberWhole} é um número par.`)

} else {
    console.log(`O numero ${numberWhole} é um numero impar.`)
}


/*
Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, você pode abrir o terminal integrado.
No terminal, execute o comando: node nome_do_arquivo.js (Substitua nome_do_arquivo.js pelo nome do arquivo onde o código foi salvo.)
Ao executar o código, você será solicitado a digitar um número inteiro.
O programa irá verificar se o número é par ou ímpar e exibir a mensagem correspondente no terminal.
*/