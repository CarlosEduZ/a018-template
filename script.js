// const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const multiplicaPorTres = (array) => {
//   const arrayMultiplicado = [];

//   for(let numero of array){
//     arrayMultiplicado.push(numero * 3)
//   }

//   return arrayMultiplicado
// }
// console.log("Triplo", multiplicaPorTres(arrayNum))

// parte 2

// const retornaPares = (arrayDeNumeros) => {
//   const arrayPares = []

//   for(let numero of arrayDeNumeros){
//     if(numero %2 ===0){
//       arrayPares.push(numero)
//     }
//   }

//   return arrayPares
// }
// console.log("Pares", retornaPares(arrayNum))

// callback
// const functionC = (arrayDeNumeros, callback) => {
//   const response = callback(arrayDeNumeros)

//   console.log("function C", response)
// }

// functionC(arrayNum, multiplicaPorTres)
// functionC(arrayNum, retornaPares)

// map()

// const multiplicaPorTresComMap = arrayNum.map((numero, indice, array) => {
//   return numero * 3
// })
// console.log("MAP", multiplicaPorTresComMap)

//Filter()

// const retornaParesComFilter = arrayNum.filter((numero, indice, array) => {
//   return numero %2 === 0
// })

// console.log("FILTER", retornaParesComFilter)












const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]


// A

const aumentaVida = (poke) => {
  return {
    nome: poke.nome,
    tipo: poke.tipo,
    vida: 100
  }
}

const pikachu = {
  nome: "Pikachu",
  tipo: "eletrico",
  vida: 35
}
console.log(pikachu)

console.log(aumentaVida(pikachu))

//Parte B
const pokemonsVidaCheia = pokemons.map(aumentaVida)
console.log(pokemonsVidaCheia) 

// PARTE C

const pokemonsDeFogo = pokemons.filter((poke) => {
  return poke.tipo === "fogo"
})
console.log(pokemonsDeFogo)

//extra

const pokeFogoVidaCheia = pokemonsDeFogo.map(aumentaVida)
console.log("Fogo vida 100", pokeFogoVidaCheia)