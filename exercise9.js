const prompt = require("prompt-sync")()


/*
9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for.
*/

let number = prompt("Digite um numero para a contagem regressiva: ")

for(let i = number; i >= 1; i--) {
    console.log(`${i}`)
}



/*
Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, você pode abrir o terminal integrado.

Ao executar o código, você será solicitado a digitar um número inicial para a contagem regressiva.
O programa exibirá uma contagem regressiva no console, começando pelo número que você digitou e decrementando até 1.
*/