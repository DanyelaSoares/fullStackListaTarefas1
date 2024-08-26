const prompt = require("prompt-sync")()

/*Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada
*/


console.log("1 - Café")
console.log("2 - Almoço")
console.log("3 - Jantar")

let meals = parseInt(prompt("\nEscolha qual refeição deseja fazer acordo com o menu:"))


switch (meals) {
    case 1:
        console.log("você escolheu a opção 1: Café")
        break
    case 2:
        console.log("você escolheu a opção 2: Almoço")
        break
    case 3:
        console.log("você escolheu a opção 3: Jantar")
        break

    default:
        console.log(" Você escolheu uma opção inválida! ")
        return
}

/*
Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, você pode abrir o terminal integrado.
No terminal, execute o comando: node nome_do_arquivo.js (Substitua nome_do_arquivo.js pelo nome do arquivo onde o código foi salvo.)
Ao executar o código, o terminal exibirá um menu com três opções de refeição:
1 - Café
2 - Almoço
3 - Jantar
Você será solicitado a escolher uma opção digitando um número correspondente.
O programa irá processar a escolha e exibir a refeição selecionada ou uma mensagem de opção inválida, caso o número digitado não esteja entre 1 e 3.

*/