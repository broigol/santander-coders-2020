/* 
Escreva a funcão "acontece", que diz se a aula sucederá de acordo com o array dos estudantes que entraram. 
Ex.: acontece(alunosDaSegunda, 2) => true
*/

function acontece (alunosDaSegunda,minimo) {
    var aula = 0;
    for (let i = 0; i < alunosDaSegunda.length; i++) {
        let teste = alunosDaSegunda[i];
        if (teste <=0 ) {
            aula = aula + 1; 
        }
    };
    return aula >= minimo; 
}; 
acontece([-2,0,0,15],2);

/* 
Escreva a função "aberturas", que utiliza um array com os arrays dos estudantes que entraram nos outros dias,
e a quantidade mínima de estudantes, e diga quais os dias em que as aulas aconteceram e quais não. 
Ex.: aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 2) => [true, false, false]
*/

function aberturas (alunosDaSegunda, alunosDaTerca, alunosDaQuarta, minimo) {
    var aulas = [];
    var aulaSegunda = 0;
    var aulaTerca = 0;
    var aulaQuarta = 0;
    //Aula de segunda:  
    for (let i = 0; i < alunosDaSegunda.length; i++) {
        if (alunosDaSegunda[i] <=0 ) {
            aulaSegunda = aulaSegunda + 1; 
        }
    };
    aulas.push(aulaSegunda >= minimo);
    
    //Aula de Terça:
    for (let i = 0; i < alunosDaTerca.length; i++) {
        if (alunosDaTerca[i] <=0 ) {
            aulaTerca = aulaTerca + 1; 
        }
    };
    aulas.push(aulaTerca >= minimo);
    
    //Aula de Quarta:
    for (let i = 0; i < alunosDaQuarta.length; i++) {
        if (alunosDaQuarta[i] <=0 ) {
            aulaQuarta = aulaQuarta + 1; 
        }
    };
    aulas.push(aulaQuarta >= minimo);
    return aulas; 
}; 
aberturas([-2,0,0,15], [-2,2,10,15], [-2,1,0,15], 2);

/*
Necessitamos uma função produto que receba um array de números e retorne o produto:
o resultado de multiplicar todos os elementos entre si.
Ex.: produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7
*/

function produto (fatores){
    var total = 0;
    for (let i = 0; i < fatores.length; i++) {
        if (i == 0) {
            total = fatores[i];
        } else {
            total = total * fatores[i];
        }
    }   
    return total; 
}
fatores([1, 6, 4])


/*
Escreva uma função fatorial, que calcule o fatorial de um número.
*/

function fatorial(n) {
    var result = 0;
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            result = n;
        } else {
            result = result * (n - i);
        }        
    }
    return result;
} fatorial(7);

/*
Função maisMenos que receba um array e retorne:
- Na primeira posição, a fração de números que são positivos;
- Na segunda posição, a fração de números que são zero;
- Na última posição, a fração de números que são negativos.
Exemplo:maisMenos([1, 2, 0, -1]) deveria retornar [0.5, 0.25, 0.25],
devido a que há 50% de positivos, 25% de zeros, e 25% de negativos.
*/

function maisMenos (element) {
    var result = [];
    var maiorUm = 0;
    var menorUm = 0;
    var igualZero = 0;
    for (let i = 0; i < element.length; i++) {
        if( element[i] < 0 ) {
            menorUm = menorUm + 1;
        } else if ( element[i] == 0 ){
            igualZero = igualZero + 1; 
        } else {
            maiorUm = maiorUm + 1; 
        }
    };
    result.push (
        (maiorUm / element.length),
        (igualZero / element.length),
        (menorUm / element.length)
    )        
    return result
};
maisMenos([1,0,0,-1]);

/*
Representar uma escada com altura variável, utilizando um array de strings.
Ex.:
var escada3 = [
    "  #",
    " ##",
    "###"
]

Montei duas funções de resposta diferentes.
*/

function escada (degraus) {
    var e = [];
    for (let i = 0; i < degraus; i++) {
        if ( i == 0 ) {
            e.push("#");
        } else {
            e.push(e[i-1]+"#")
        }
    }
    return e;
} escada(3);


function escada (degraus) {
    var e = [];
    for (let i = 0; i < degraus; i++) {
    var d = "#".repeat(i+1); e.push(d);       
    }
    return e;
} escada(5);

/*

Escreva a função alturaArvoreUtopica, que utilize uma quantidade de ciclos de crescimento,
e retorne a altura resultante da árvore.

Árvores utópicas  crescem de uma forma particular, em dois ciclos:

- cada primavera dobram seu tamanho
- cada verão crescem um metro
Ex.:
si N = 0, sua altura será 1 metro (não cresceu nada)
si N = 1, sua altura será de 2 metros (dobrou a altura na primavera)
si N = 2, sua altura será de 3 metros (cresceu um metro mais no verão)
si N = 3, sua altura será de 6 metros (dobrou a altura na primavera seguinte)

*/

function alturaArvoreUtopica (ciclos) {
    var altura = 0;
    for (let i = 0; i <= ciclos; i++) {
        if (ciclos==0) {
            altura = 1;
        } else if ((i % 2) == 0) {
                altura +=1 ; 
        } else {
                altura *= 2 ; 
        }
    }
    return altura
} alturaArvoreUtopica(1)