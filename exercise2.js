const prompt = require("prompt-sync")()

/*2) Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.*/

let age = parseInt(prompt("Qual é a sua idade? "))

console.log("\nTabela de classificação por idade:\n ")
console.log("Idade 0 a 12 anos = Criança\nIdade 13 a 17 anos = Adolescente\nIdade 18 a 64 anos = Adulto\nIdade 65 anos ou mais = Idoso\n")

if (age > 0 && age <= 12) {
    console.log("De acordo com a tabela de classificação, você é uma criança.")
} else if (age > 12 && age <= 17) {
    console.log("De acordo com a tabela de classificação, você é um Adolescente.")
} else if (age > 17 && age <= 64) {
    console.log("De acordo com a tabela de classificação, você é um Adulto.")
} else {
    console.log("De acordo com a tabela de classificação, você é um Idoso.")
}

/*
Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, você pode abrir o terminal integrado.
No terminal, execute o comando: node nome_do_arquivo.js (Substitua nome_do_arquivo.js pelo nome do arquivo onde o código foi salvo.)
Ao executar o código, você será solicitado a digitar sua idade.
O programa irá classificar sua idade em uma das seguintes categorias e exibir a mensagem correspondente no terminal:

Criança (0 a 12 anos)
Adolescente (13 a 17 anos)
Adulto (18 a 64 anos)
Idoso (65 anos ou mais).
*/