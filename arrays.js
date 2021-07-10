const alunosGama = ["Paulo", "Mario", "Felipe", "Carlos"]

//Acessar informções no array
console.log(alunosGama[2]) //"Felipe"

//Operador spread (...)

const alunosXp = [...alunosGama, "Miguel"]

console.log(alunosXp)

//Metodos de iteração

for (let i = 0; i < alunosXp.length; i++) {
    console.log(alunosXp[i])
}

//Map
alunosXp.map(aluno => console.log(aluno))


//Filter
const numeros = [34, 45, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero%2 !=0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero%2 ==0)
console.log(numerosPares)



//Reduce - reduz nosso array a um resultado de uma operação matematica

const numbers = [1, 34, 35]

const soma = numbers.reduce((valorAnterior, valorAtual)=>{
    return valorAnterior + valorAtual
},5)
 console.log(soma) //75
