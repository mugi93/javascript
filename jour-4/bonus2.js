
var joueur1 = 0;
var joueur2 = 0;


function launchDice(numberOfDice) {
    var sum = 0

    for (var i = 1; i <= numberOfDice; i++) {
        var dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        sum = sum + dice;
        
    }
    
    return sum;

    
    
}

    joueur1 = launchDice(5);
    joueur2 = launchDice(5);

    if (joueur1<joueur2){
        console.log(joueur2);

    }else  {
        console.log(joueur1);

    }
