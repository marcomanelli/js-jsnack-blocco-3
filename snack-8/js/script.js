/* Esercizio (map) -> si potrebbe ottimizzare con una funzione separata per il capitalize
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */
$(function(){
  const lista = ['pippo', 'PLUTO', 'Paperino']

  const listaCap = lista.map((stringa) => {
    let temp = stringa.toLowerCase()

    temp = temp.charAt(0).toUpperCase() + temp.slice(1)
    return temp
  })

  console.log(listaCap)
})