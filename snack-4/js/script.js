$(function(){

  var giocatori = [
    {
      codice: 'ABC123',
      punti: 0,
      percentuale: 0,
    }
  ]

  var n = generateCode()

  console.log(n)

  function generateCode() {
    var temp = ''

    for(var i=0; i<3; i++){
      temp += generateRandomLetter() 
    }

    for(var i=0; i<3; i++){
      temp += generateRandomNumber() 
    }

    return temp
  }

  function generateRandomNumber() {
    return Math.floor((Math.random() * 10))
  }

  function generateRandomLetter() {
    var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
    return alfabeto[Math.floor(Math.random() * alfabeto.length)]
  }
})