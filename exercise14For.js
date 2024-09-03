const prompt = require("prompt-sync")()

/*
14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while
*/

let number = parseInt(prompt('Digite um número inteiro para calcular o fatorial: '));
let factorial = 1;

if (number < 0) {
    console.log('O fatorial não é definido para números negativos.');
} else {
    for (let i = 1; i <= number; i++) {
        factorial *= i;  // Multiplica o valor atual de factorial por i
    }
    console.log(`O fatorial de ${number} é: ${factorial}`);
}


/*
Abra o terminal no diretório onde o arquivo .js está salvo.
Se estiver usando o VS Code, você pode abrir o terminal integrado.
Certifique-se de que o Node.js está instalado em seu sistema.
Verifique isso no terminal com o comando:node -v
Se o Node.js não estiver instalado, faça o download e instale
a partir do site oficial Node.js.
Execute o código usando o comand: node factorialCalculator.js

Ao executar o código, o programa solicitará ao usuário que forneça um número inteiro para calcular o fatorial.
O programa calculará o fatorial desse número utilizando um loop for e exibirá o resultado no console.
Se o número for negativo, o programa exibirá uma mensagem informando que o fatorial não é definido para números negativos.

*/