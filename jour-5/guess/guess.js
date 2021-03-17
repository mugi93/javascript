// var properties = [
//     {
//       name: "player",
//       validator: /^Math.random+$/, // Regex de validation : lettres maj / min, espaces et tirets
//       warning: "Le username ne doit contenir que des lettres, espaces et tirets"







var prompt = require("prompt");

prompt.start();
var mysteryNum = Math.floor(Math.random() * (100 - 1) + 1);

function displayPrompt() {
  prompt.get({ name: "number", description: "Quel est le nombre ?" , validator: /^[0-9]+$/, warning:"choissisez un nombre entier"}, function (err, res) { // permet de paramétrer la question
    if (parseInt(res.number) === mysteryNum ) { 
      console.log("bravo !");
    } else if (parseInt(res.number) < mysteryNum){
        console.log("c'est plus")
      displayPrompt(); // relance le prompt si la saisie n'est pas valide
      
    }else {
        console.log("c'est moins")
        displayPrompt()
    }
  });
}

displayPrompt(); // on n'oublie pas d'appeler la fonction ;)
    



// var mysteryNum = Math.floor(Math.random() * (100 - 1) + 1);
// function play() {
//     var play = Math.floor(Math.random() * (100 - 1) + 1);

//     if (play === mysteryNum) {
//         console.log("bravo")

//     } else if (play < mysteryNum) {
//         console.log("c'est plus")

//     } else if (play > mysteryNum) {
//         console.log("c'est moins")

//     } else {
//         console.log("error")
//     }
// }
// play()