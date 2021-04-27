$(function(){
  var zucchine = [
    {
      varietà: 'verde',
      peso: 200,
      lunghezza: 12
    },
    {
      varietà: 'verde',
      peso: 240,
      lunghezza: 13
    },
    {
      varietà: 'lunga',
      peso: 180,
      lunghezza: 22
    },
    {
      varietà: 'verde',
      peso: 209,
      lunghezza: 29
    },
    {
      varietà: 'corta',
      peso: 80,
      lunghezza: 9
    },
    {
      varietà: 'verde',
      peso: 230,
      lunghezza: 17
    },
    {
      varietà: 'verde',
      peso: 127,
      lunghezza: 23
    },
    {
      varietà: 'corta',
      peso: 270,
      lunghezza: 11
    },
    {
      varietà: 'lunga',
      peso: 100,
      lunghezza: 40
    },
    {
      varietà: 'verde',
      peso: 200,
      lunghezza: 18
    }
  ]

  var arrLunghe = []
  var arrCorte = []
  for(var zucchina of zucchine){
    if(zucchina.lunghezza>15){
      arrLunghe.push(zucchina)
    }else{
      arrCorte.push(zucchina)
    }
  }

  console.log(arrLunghe)
  console.log(arrCorte);
})