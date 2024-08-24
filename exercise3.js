const prompt = require("prompt-sync")()
/*
Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

console.log("\nClassificação de notas: \n\nAprovado:  entre 7 e 10 \nRecuperação: entre 5 e 6 \nReprovado:  entre 0 e 4 ")



let score = parseFloat(prompt("\nDigite a nota do aluno entre 0 e 10: "))

if (score >= 7) {
    console.log(`Sua nota é ${score}, portanto, você está APROVADO`)
} else if (score >= 5 && score < 7) {
    console.log(`Sua nota é ${score}, portanto, você está EM RECUPERAÇÃO`)
} else {
    console.log(`Sua nota é ${score}, portanto, você está REPROVADO`)
}

/*
Certifique-se de que o Node.js está instalado. 
Este código utiliza o módulo prompt-sync para capturar a entrada do usuário. Para instalar este módulo, siga os passos abaixo:
Abra o terminal no diretório onde o arquivo .js está salvo.
Execute o comando para instalar o prompt-sync: npm install prompt-sync
Abra o terminal no diretório onde o arquivo .js está salvo. Se estiver usando o VS Code, você pode abrir o terminal integrado.
No terminal, execute o comando: node nome_do_arquivo.js (Substitua nome_do_arquivo.js pelo nome do arquivo onde o código foi salvo.)

Ao executar o código, você será solicitado a digitar uma nota entre 0 e 10.
O programa classificará a nota nas seguintes categorias e exibirá a mensagem correspondente no terminal:
Aprovado: para notas entre 7 e 10
Recuperação: para notas entre 5 e 6
Reprovado: para notas entre 0 e 4
*/