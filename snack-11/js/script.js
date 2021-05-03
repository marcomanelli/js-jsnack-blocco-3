/* Esercizio (oggetti, array, forEach con splice oppure filter)
Un oggetto rappresenta una finestra di un browser e contiene due campi: 
un array di tab aperte
un numero che indica l’indice della tab aperta nell’array:
{
    “tab”: [“Facebook”, “GitHub”, “Gmail”],
    “activeTab”: 0
}
Il software deve guardare se c’è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva.
 */
$(function(){

  const browser = [
    {
      tab: ['facebook', 'font_awesome', 'netflix'],
      activeTab: 0
    }
  ]

  browser.forEach((pagina) => {
    pagina.tab.filter((tab) => {
      if(tab != 'facebook'){
        return true
      }
      return false
    })
  })

  console.log(browser.tab)
})