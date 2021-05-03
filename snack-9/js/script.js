/* Esercizio (array, oggetti, filter)
Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe. Es: 
[
	{ nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
	{ nome: ‘cane’, ’famiglia: ‘canidi’, classe: ‘mammiferi’ },
	{ nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]
Crea un nuovo array con la lista dei mammiferi. */
$(function() {

  const animali = [
    { 
      nome: 'leone',
      famiglia: 'felidi',
      classe: 'mammiferi'
    },
	  { 
      nome: 'cane',
      famiglia: 'canidi',
      classe: 'mammiferi'
    },
	  { 
      nome: 'gallina',
      famiglia: 'fasianidi',
      classe: 'uccelli'
    }
  ]

  const animaliMammiferi = animali.filter((animale) => {
    if(animale.classe == 'mammiferi'){
      return true
    }
    return false
  })

  console.log(animaliMammiferi)
})