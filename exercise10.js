const prompt = require("prompt-sync")()

/*
10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/


let wholeNumber = parseInt(prompt("Digite um numero qualquer: "))

for (let i = 0; i < 10; i++) {
    console.log(wholeNumber)
}


/*
Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, você pode abrir o terminal integrado.

Ao executar o código, você será solicitado a digitar um número inteiro.
O programa exibirá esse número no console 10 vezes, uma em cada linha.
*/