$(function(){
  var automobili = [
    {
      marca: 'fiat',
      modello: 'panda',
      alimentazione: 'metano'
    },
    {
      marca: 'toyota',
      modello: 'prius',
      alimentazione: 'benzina'
    },
    {
      marca: 'ford',
      modello: 'focus',
      alimentazione: 'diesel'
    },
    {
      marca: 'volkswagen',
      modello: 'polo',
      alimentazione: 'benzina'
    },
    {
      marca: 'tesla',
      modello: 'model s',
      alimentazione: 'elettrico'
    },
    {
      marca: 'ferrari',
      modello: 'la ferrari',
      alimentazione: 'benzina'
    },
    {
      marca: 'ford',
      modello: 'fiesta',
      alimentazione: 'diesel'
    },
    {
      marca: 'renault',
      modello: 'clio',
      alimentazione: 'gpl'
    },
    {
      marca: 'fiat',
      modello: 'panda',
      alimentazione: 'gpl'
    },
    {
      marca: 'fiat',
      modello: 'punto',
      alimentazione: 'benzina'
    }
  ]

  let autoBenzina = []
  let autoDiesel = []
  let autoMiste = []

  automobili.forEach((automobile) => {
    if(automobile.alimentazione == 'benzina'){
      autoBenzina.push(automobile)
    }else if(automobile.alimentazione == 'diesel'){
      autoDiesel.push(automobile)
    }else{
      autoMiste.push(automobile)
    }
  })

  console.log(autoBenzina)
  console.log(autoDiesel)
  console.log(autoMiste)
})