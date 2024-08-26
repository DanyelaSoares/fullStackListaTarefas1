const prompt = require("prompt-sync")()

/*
12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for
*/

let number = parseInt(prompt("Digite o numero que voce quer que seja calculada a tabuada: "))

for(let i = 1; i <= 10; i++){
    let multiplicationTable = number * i
    console.log(`${number}x${i} = ${multiplicationTable}`)
}


/*
Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, você pode abrir o terminal integrado.

Ao executar o código, o programa solicitará ao usuário que forneça um número.
O programa exibirá a tabuada desse número, mostrando as multiplicações de 1 a 10.
*/