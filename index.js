
function theBeatlesPlay(musicians, instruments){
 for (i = 0; i < musicians.length+1; i++){
   var array = []
   array.push(`${musicians[i]}` + " plays " + `${instruments[i]}`)
 }
 return array
}
