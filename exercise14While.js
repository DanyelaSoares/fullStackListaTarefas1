const prompt = require('prompt-sync')();

/*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
*/

let number = parseInt(prompt('Digite um número inteiro para calcular o fatorial: '));
let factorial = 1;
let i = 1;

if (number < 0) {
    console.log('O fatorial não é definido para números negativos.');
} else {
    while (i <= number) {
        factorial *= i;  // Multiplica o valor atual de factorial por i
        i++;             // Incrementa i
    }
    console.log(`O fatorial de ${number} é: ${factorial}`);
}


/*
Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, você pode abrir o terminal integrado.

Ao executar o código, o programa solicitará ao usuário que forneça um número inteiro para calcular o fatorial.
O programa calculará o fatorial desse número utilizando um loop while e exibirá o resultado no console.
Se o número for negativo, o programa exibirá uma mensagem informando que o fatorial não é definido para números negativos.

*/