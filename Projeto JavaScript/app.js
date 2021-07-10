// pegar o imput
//Se for Sim, mostra as categorias disponiveis e pergunta qual categoria escolhe
//Se Não, mostra todos os livros em ordem crescente pela quantidade de paginas


const livros = require('./database')

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro> S/N? ')

if(entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponiveis:')
    console.log('Fantasy', '/Fantasy2', '/Fantasy3',
    '/Fantasy4', '/Fantasy5', '/Fantasy6')

    const entradaCategoria = readline.question('Qual categotria você escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {

    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log("Essas são todos os livros disponiveis:")
    console.table(livrosOrdenados)
}
