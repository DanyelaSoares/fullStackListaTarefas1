

const prompt = require("prompt-sync")()

/*
5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.


O IMC é calculado dividindo o peso pela altura ao quadrado de uma pessoa.
 Isto é, dividir seu peso (kg) pela altura (m) multiplicada por ela mesma.
  A fórmula é a seguinte: IMC = peso/(altura x altura)

  Classificação do IMC de acordo com a OMS:
IMC <18,5kg/m2 - baixo peso.
IMC >18,5 até 24,9kg/m2 - eutrofia (peso adequado)
IMC ≥25 até 29,9kg/m2 - sobrepeso.
IMC >30,0kg/m2 - Obesidade
*/

let bodyWeight = parseFloat(prompt(" \nDigite seu peso corporal: "))
let height = parseFloat(prompt(" Digite sua altura: "))

let imc = bodyWeight / (height * height)
console.log(`${imc}`)

if (imc <= 18.5) {
  console.log(`Seu IMC é de ${imc}, portanto, você esta com BAIXO PESO`)
} else if (imc > 18.5 && imc <= 24.9) {
  console.log(`Seu IMC é de ${imc}, portanto, você esta com PESO ADEQUADO`)
} else if (imc > 25 && imc <= 29.9) {
  console.log(`Seu IMC é de ${imc}, portanto, você esta com SOBREPESO`)
} else {
  console.log(`Seu IMC é de ${imc}, portanto, você esta com OBESIDADE`)
}


/*
Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, você pode abrir o terminal integrado.
No terminal, execute o comando: node nome_do_arquivo.js (Substitua nome_do_arquivo.js pelo nome do arquivo onde o código foi salvo.)

Em seguida, o programa classificará o IMC nas seguintes categorias e exibirá a mensagem correspondente no terminal:
Baixo Peso: IMC < 18,5
Peso Adequado: IMC entre 18,5 e 24,9
Sobrepeso: IMC entre 25 e 29,9
Obesidade: IMC ≥ 30
*/