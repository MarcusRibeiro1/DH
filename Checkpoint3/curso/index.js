module.exports = {
    curso:{
        nomeCurso: 'Curso CTD',
        notaAprovacao: 6.5,
        faltasMaximas: 10,
        listaEstudantes: [],
        novoEstudante: function (estudante){
            this.listaEstudantes.push(estudante);
        },

        aprovacao: function(aluno){
            if(aluno.qtdFaltas < this. faltasMaximas && aluno.calcularMedia() >= this.notaAprovacao){
                resultado = true;
            }
            else if (aluno.qtdFaltas === this.faltasMaximas && aluno.calcularMedia() > (this.notaAprovacao * 1.1)){
                resultado = true;
            }
            else {
                resultado = false;
            }

            return resultado; 
            },

            listaDeAprovados: function(){
                let verdade = [];
                for (let i = 0; i < this.listaEstudantes.length; i++) {
                    verdade.push(this.aprovacao(this.listaEstudantes[i]));
                }
                return verdade
            }  
    }
}

// nota igual ou superior a notaAprovacao && menos que faltasMaximas

//2° se o aluno tiver faltas Maximas tera que ter 10% > notaAprovacao