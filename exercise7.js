const prompt = require("prompt-sync")()

/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

let amount = prompt("Quantas maças você deseja comprar? ")

let priceUnit;
let totalCost = 0;

if (amount < 12) {
    priceUnit = 0.30;
} else {
    priceUnit = 0.25;
}


for (let i = 0; i < amount; i++) {
    totalCost += priceUnit;
}

console.log(`Você comprará ${amount} maçãs, sendo que cada uma saira pelo valor de R$ ${priceUnit.toFixed(2)}`)
console.log(`O custo total será de: R$ ${totalCost.toFixed(2)}`);


/*
Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, você pode abrir o terminal integrado.
No terminal, execute o comando: node nome_do_arquivo.js (Substitua nome_do_arquivo.js pelo nome do arquivo onde o código foi salvo.)

Ao executar o código, você será solicitado a digitar a quantidade de maçãs que deseja comprar.
O programa calculará o valor unitário das maçãs com base na quantidade:
R$ 0,30 por maçã se a quantidade for menor que 12.
R$ 0,25 por maçã se a quantidade for 12 ou mais.
O custo total será calculado multiplicando o preço unitário pela quantidade de maçãs compradas.

**O código atual usa um loop for para calcular o custo total. 

*/
