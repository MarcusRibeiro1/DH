// Checkpoint 3 - Programação Imperativa

let curso = require('./curso')

function Aluno(nomeP, qtdFaltasP,notasP){
    this.nome = nomeP;
    this.qtdFaltas = qtdFaltasP;
    this.notas = notasP;
    this.faltas = function(){
        this.qtdFaltas += 1;
    },
    this.calcularMedia = function (){
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++){
            soma += this.notas[i];
            
        }
        return soma / this.notas.length;
    }
}

let aluno1 = new Aluno('Marcus', 10, [10, 5, 9]);
let aluno2 = new Aluno('Caio', 8, [5, 7, 4]);
let aluno3 = new Aluno('Renan', 10, [7, 3, 10]);

curso.curso.listaEstudantes.push(aluno1);

console.log("A média é: " + aluno1.calcularMedia());

curso.curso.novoEstudante(aluno2);

console.log("A média é: " + aluno2.calcularMedia());

curso.curso.novoEstudante(aluno3);

console.log("A média é: " + aluno3.calcularMedia());

console.log(curso.curso.listaEstudantes);

console.log(curso.curso.listaDeAprovados());
