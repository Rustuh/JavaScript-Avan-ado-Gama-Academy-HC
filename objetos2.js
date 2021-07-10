const filmes = [
    {   
        id: 1,
        titulo: "Jumanji",
        descricao: "Desconhecido",
        duracao: 200
    },
    {   
        id: 2,
        titulo: "Eu",
        descricao: "Desconhecido",
        duracao: 120
    },
    {   
        id: 3,
        titulo: "Tey",
        descricao: "Desconhecido",
        duracao: 180
    },
]

const [{id, titulo, descricao, duracao}] = filmes

console.log(titulo)

filmes.map(filme => console.log(filme.descricao))