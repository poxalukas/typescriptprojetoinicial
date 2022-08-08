const pessoa = {
    nome: "Gabi",
    idade: "21",
    profissao: "dentista"
}

const Cristal = {
    name: 'Cristal',
    idade: 24,
    casado: true,
    trabalho: 'biologa' // Nesse campo é dito que a Cristal trabalha como 'biologa'
}

const maria = { 
    name: 'Maria',
    idade: 23,
    casado: false,
    trabalho: 'engenheira' // E aqui é dito que maria trabalha como 'engenheira'.
}

/// Para resolver isso vamos usar a feature Enum do TypeScript para criar o enum Profissao
enum Profissao {
    Professora,
    biologa,
    dentista,
    Engenheira,
    Pintor,
    JogadorFutebol
}

/* E para garantir que o enum vai ser usado corretamente, vamos criar um tipo Pessoa também
type Pessoa = {
    name: string,
    idade: number,
    casado: boolean,
    trabalho: Profissao // Aqui inserimos o enum como um tipo
}*/

// Criando uma interface
interface PessoaFuncao  {
    nome: string,
    idade: number,
    trabalho: Profissao
    
}

//Criando uma interface com a classe estendida de pessoa
interface estudante extends PessoaFuncao {
    materias: string[]
}

const gabriel: estudante = {
    nome: 'Gabriel',
    idade: 26,
    trabalho: Profissao.JogadorFutebol, // E aqui usamos ele para definir de forma padronizada a profissão de cada objeto do tipo Pessoa
    materias: ['Matematica', 'programação', 'Geografia']
}

const mario: PessoaFuncao = {
    nome: 'Mario',
    idade: 26,
    trabalho: Profissao.Pintor // Tudo padronizado e consistente
}