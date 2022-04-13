/*-----------1 questão-----*/
function Alunos(nome,quantidade_faltas,notas){
    this.nome = nome;
    this.quantidade_faltas = quantidade_faltas;
    this.notas = notas; 

    this.calcularMedia = function (){
        var somaNotas=0;
        for( let i = 0 ; i < this.notas.length ; i ++){
        somaNotas += this.notas[i];
        }
        return somaNotas/this.notas.length;

    }
    this.faltas = function(){
       quantidade_faltas = this.quantidade_faltas +=1;
        return quantidade_faltas;
    }
}

const aluno01 = new Alunos("Jorge",3,[6,3,5,7,2]);
const aluno02 = new Alunos("Ana",1,[10,7,8,9,7]);
const aluno03 = new Alunos("Maria",0,[10,8,10,9,7]);
const aluno04 = new Alunos("João",3,[10,9,7,6,5]);
const aluno05 = new Alunos("Claudia", 1,[4,9,8,10,10]);

let curso = {
    nomeCurso:'CTD',
    notaAprova:7,
    faltasMax:2,
    listaEstudantes:[aluno01,aluno02,aluno03,aluno04],

    adicionaAluno: function(novoAluno){
        this.listaEstudantes.push(novoAluno);
        return this.listaEstudantes;

    },
    aprovacao: function(final){
        media= final.calcularMedia();
        if ((final.quantidade_faltas<=this.faltasMax ) &&(media>=this.notaAprova)){
            console.log("Você está: Aprovado");
        } else if ((final.quantidade_faltas>this.faltasMax ) && (media>=this.notaAprova) && (media*this.notaAprova/100)){
            console.log("Você está: Aprovado");
        }else if ((final.quantidade_faltas>this.faltasMax) && (media<this.notaAprova))
        console.log("Você está: Reprovado");

    },
    
    listaAprovados: function(){
        aprovados = []
        for (let i = 0; i < this.listaEstudantes.length; i++) {
          aprovados.push(this.aprovacao (this.listaEstudantes[i]));
        }
        return aprovados;

    }

}
console.log(aluno01.calcularMedia());
console.log(aluno01.faltas());
console.log(curso.adicionaAluno(aluno05));
curso.aprovacao(aluno01);
curso.listaAprovados();

