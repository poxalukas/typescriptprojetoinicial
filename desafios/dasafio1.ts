// Como podemos rodar isso em um arquivo .ts sem causar erros? 
/*
let employee = {};
employee.code = 10;
employee.name = "John";
*/
//pode ser declarado da seguinte forma
let funcionario = {
    codigo: 10,
    nome: "Cristal"
};

// ou assim
let funcionario2: { codigo: number, nome: string} = {
        codigo:  20,
        nome: "gabi"

}
//iniciando objetos utulizando interface    
interface funcionario {
    codigo: number,
    nome: string
}

let funcionario3: funcionario = {
    codigo: 21,
    nome: "Claudio"
}
    