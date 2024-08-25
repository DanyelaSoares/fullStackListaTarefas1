const prompt = require("prompt-sync")()

/*
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.

Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/


let A = parseFloat(prompt("Digite o valor do lado A: "))
let B = parseFloat(prompt("Digite o valor do lado B: "))
let C = parseFloat(prompt("Digite o valor do lado C: "))

if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
        console.log("Triângulo Equilátero")
    } else if (A === B || A === C || B === C) {
        console.log("Triângulo Isósceles")
    } else {
        console.log("Triângulo Escaleno")
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo.")
}

/*
Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, você pode abrir o terminal integrado.
No terminal, execute o comando: node nome_do_arquivo.js (Substitua nome_do_arquivo.js pelo nome do arquivo onde o código foi salvo.)

Ao executar o código, você será solicitado a digitar os valores de três lados de um triângulo (A, B, C).
O programa verificará se os valores fornecidos podem formar um triângulo usando a condição:
A < B + C && B < A + C && C < A + B
Se os valores formarem um triângulo, o programa determinará o tipo de triângulo:
Triângulo Equilátero: todos os lados são iguais (A === B && B === C)
Triângulo Isósceles: dois lados são iguais (A === B || A === C || B === C)
Triângulo Escaleno: todos os lados são diferentes (A !== B && B !== C)
Se os valores não formarem um triângulo, o programa exibirá uma mensagem informando que os valores fornecidos não formam um triângulo.
*/