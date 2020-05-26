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


