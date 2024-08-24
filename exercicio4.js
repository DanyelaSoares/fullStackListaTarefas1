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