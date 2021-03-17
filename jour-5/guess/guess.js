var prompt = require("prompt");

prompt.start();  // démarre le prompt



var mysteryNum = Math.floor(Math.random() * (100 - 1) + 1);
function play() {
    var play = Math.floor(Math.random() * (100 - 1) + 1);

    if (play === mysteryNum) {
        console.log("bravo")

    } else if (play < mysteryNum) {
        console.log("c'est plus")

    } else if (play > mysteryNum) {
        console.log("c'est moins")

    } else {
        console.log("error")
    }
}
play()