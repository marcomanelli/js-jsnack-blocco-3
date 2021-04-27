$(function(){
  var numeri = [1,2,3]
  var lettere = ['a', 'b', 'c']
  var insieme = []

  fusione(numeri, lettere, insieme)
  console.log(numeri)
  console.log(lettere)
  console.log(insieme)

  function fusione(arr1, arr2, arr3){
    for(var i=0; i<arr1.length; i++){
      arr3.push(arr1[i])
      arr3.push(arr2[i])
    }
  }

})