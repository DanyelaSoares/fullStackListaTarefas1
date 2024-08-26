const prompt = require("prompt-sync")()

/*
11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
*/

function calculateSum() {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        let number = parseFloat(prompt(`Digite um número (${i + 1}): `));
        sum += number;
    }
    return sum;
}
let totalSum = calculateSum();
console.log(`A soma total dos números é: ${totalSum}`);


/*
Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, você pode abrir o terminal integrado.

Ao executar o código, o programa solicitará ao usuário que digite 5 números, um de cada vez.
O programa calculará a soma total desses 5 números e exibirá o resultado no console.
*/












/*
Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, você pode abrir o terminal integrado.


*/