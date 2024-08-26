const prompt = require("prompt-sync")()

/*
13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números
*/

let sum = 0;
let count = 0;
let number;

do {
    number = parseFloat(prompt('Digite um número decimal (ou 0 para sair): '));

    if (number !== 0) {
        sum += number;
        count++; //conta quantos números válidos foram inseridos.
    }
} while (number !== 0);

if (count > 0) {
    let average = sum / count;
    console.log(`\nTotal de numeros digitados validos: ${count}`)
    console.log(`A média aritmética dos números digitados é: ${average.toFixed(2)}`);
} else {
    console.log('Nenhum número válido foi digitado.');
}



/*
Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, você pode abrir o terminal integrado.

Ao executar o código, o programa solicitará ao usuário que insira números decimais repetidamente até que ele digite 0 para encerrar.
O programa calculará a soma de todos os números inseridos (excluindo o 0) e determinará a média aritmética.
Se o usuário não inserir nenhum número válido (diferente de 0), o programa informará que nenhum número válido foi digitado.


*/