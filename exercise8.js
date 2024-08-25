const prompt = require("prompt-sync")()

/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

let number1 = prompt("Digite o primeiro numero: ")
let number2 = prompt("Digite o segundo numero: ")

if (number1 > number2) {
    console.log(`Valores em ordem crescente: ${number1}, ${number2}`)
} else {
    console.log(`Valores em ordem crescente: ${number2}, ${number1}`)
}



/*
Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, você pode abrir o terminal integrado.

Ao executar o código, você será solicitado a digitar dois valores. 
Certifique-se de que os valores não sejam iguais, conforme a premissa do exercício.
O programa comparará os dois valores e exibirá a ordem crescente.
*/