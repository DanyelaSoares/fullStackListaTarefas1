const prompt = require("prompt-sync")()

/*
15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for
*/

let A = 0;
let B = 1;

console.log(A);
console.log(B);

for (let i = 3; i <= 10; i++) {
    let nextNum = A + B;

    console.log(nextNum);

    A = B;
    B = nextNum;
}

/*
Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, você pode abrir o terminal integrado.

Ao executar o código, o programa gerará e imprimirá os primeiros 10 números da sequência de Fibonacci.
A sequência será exibida no console, começando com 0 e 1, e os próximos números serão calculados pela soma dos dois anteriores.

*/