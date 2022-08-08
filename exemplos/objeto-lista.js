"use strict";
const pessoa = {
    nome: "Gabi",
    idade: "21",
    profissao: "dentista"
};
const Cristal = {
    name: 'Cristal',
    idade: 24,
    casado: true,
    trabalho: 'biologa' // Nesse campo é dito que a Cristal trabalha como 'biologa'
};
const maria = {
    name: 'Maria',
    idade: 23,
    casado: false,
    trabalho: 'engenheira' // E aqui é dito que maria trabalha como 'engenheira'.
};
/// Para resolver isso vamos usar a feature Enum do TypeScript para criar o enum Profissao
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["biologa"] = 1] = "biologa";
    Profissao[Profissao["dentista"] = 2] = "dentista";
    Profissao[Profissao["Engenheira"] = 3] = "Engenheira";
    Profissao[Profissao["Pintor"] = 4] = "Pintor";
    Profissao[Profissao["JogadorFutebol"] = 5] = "JogadorFutebol";
})(Profissao || (Profissao = {}));
const gabriel = {
    nome: 'Gabriel',
    idade: 26,
    trabalho: Profissao.JogadorFutebol,
    materias: ['Matematica', 'programação', 'Geografia']
};
const mario = {
    nome: 'Mario',
    idade: 26,
    trabalho: Profissao.Pintor // Tudo padronizado e consistente
};
