const prompt = require("prompt-sync")()
/*
Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

/*
Classificação de notas:
Aprovado:  entre 7 e 10
Recuperação: entre 5 e 6
Reprovado:  entre 0 e 4

*/


let score = parseFloat(prompt("Digite a nota do aluno entre 0 e 10: "))

if(score >=7){
    console.log(`Sua nota é ${score}, portanto, você está APROVADO`)
}else if(score >= 5 && score < 7){
    console.log(`Sua nota é ${score}, portanto, você está EM RECUPERAÇÃO`)
}else{
    console.log(`Sua nota é ${score}, portanto, você está REPROVADO`)
}