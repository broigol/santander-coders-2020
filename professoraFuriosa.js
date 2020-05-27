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
