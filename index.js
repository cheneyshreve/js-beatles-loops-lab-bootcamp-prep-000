
function theBeatlesPlay(musicians, instruments){
 for (i = 0; i < musicians.length; i++){
   var array = []
   array.push(`${musicians[i]} + ${instruments[i]}`)
 }
 return array
}
