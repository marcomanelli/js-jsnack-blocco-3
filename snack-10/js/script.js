/* Esercizio (array, oggetti, map, interpolazione delle stringhe)
Crea un array di oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un’età.
Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
Es:
[
	{ nome: ‘Mario’, cognome: ‘Rossi’, eta: 60 },
	{ nome: ‘Luigi’, cognome: ‘Verdi’, eta: 12 },
	{ nome: ‘Silvia’, cognome: ‘Neri’, eta: 25 },
]
[
	‘Mario Rossi può guidare’,
	‘Luigi Verdi non può guidare’,
	‘Silvia Neri può guidare’,
] */
$(function(){

  const persone = [
    { nome: 'Mario', cognome: 'Rossi', eta: 60 },
    { nome: 'Luigi', cognome: 'Verdi', eta: 12 },
    { nome: 'Silvia', cognome: 'Neri', eta: 25 },
  ]

  const maggiorenni = persone.forEach((persona) => {
    if(persona.eta >= 18){
      console.log(`
        ${persona.nome} ${persona.cognome} può guidare
      `)
    }else{
      console.log(`
        ${persona.nome} ${persona.cognome} non può guidare
      `)
    }
  })

  console.log(maggiorenni)
})