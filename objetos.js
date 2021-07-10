const pessoa = {
    nome: "Felipe",
    idade: 33,
    cidade: "Rio de Janeiro"
}

//Notação de ponto

console.log(pessoa.nome) // Felipe

//Notação de colchetes

console.log(pessoa["idade"]) // 33

//Como desestruturar Objetos

const {nome, idade, cidade} = pessoa

console.log(cidade)