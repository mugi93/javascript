var sentence = "Hello Konexio!";
var kone=[]
// for (var i=sentence.length - 1; i>=0; i--){
//      kone.push(sentence[i])
    
// }

console.log(kone.join(""));

for (var i=0; i<=sentence.length -1; i++){
    kone.unshift(sentence[i])
   
}

console.log(kone.join(""));