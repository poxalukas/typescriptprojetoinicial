//types
//interface
/*
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: number): void;

}
*/

type IAnimal = {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: number): void;


}
interface IFelino extends IAnimal {
    visaoNoturna: boolean;
    
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => ('${alturaEmDecibeis}dB')
}

/*
    animal.executarRugido('s')

const felino: IFelino = {
    nome: 'leão',
    tipo: 'terrestre',
    visaoNoturna: true,
}
*/