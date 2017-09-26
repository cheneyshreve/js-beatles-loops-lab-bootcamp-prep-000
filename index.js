
function theBeatlesPlay(musicians, instruments){
  var array = []
 for (i = 0; i < musicians.length; i++){
   array.push(`${musicians[i]}` + " plays " + `${instruments[i]}`)
 }
 return array
}

function johnLennonFacts(facts) {
  var factArray = []
  let i = 0
  while (i < facts.length){
    factArray.push(`${facts[i++]}` + " !!!")
  }
  return factArray
}

function iLoveTheBeatles(n){
 var myArray = []
 var i = 0;
 do {
   myArray.push("I love the Beatles!")
 } while (i < n && i < 15)
  i++
  return myArray
}
