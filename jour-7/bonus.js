var prompt = require("prompt");

prompt.start();

var secret = "poule"
var pou = secret.split("")
function pendu() {


    prompt.get({
        name: "mot",
        validator: /^[a-zA-Z]+$/,
        description: "choisir un mot de 5 lettres",
    },

        function (err, res) {

            console.log(res.mot)

            if (err) {
                console.log("error")

            } else {
                // for (var i = 1; i <= 10; i++) {
                  function displayPrompt() {
                    res.mot.split("");
                     var pou = secret.split("")
                    // for (var j = 0; j < secret.length; j++){
                    //     if(res.mot[j]===pou[j]){
                    //         console.log(res.mot[j])

                    //     }else{
                    //         console.log("pas de chance ")
                    //     }
                    // }
                     
                    var po =res.mot.map(function(nam){
                        
                        return nam.res.mot.join("")===pou;
    
                    });
                    console.log(po);






                  }



                    // var po =res.map(function(nam){
                    //     return nam.split("");

                    // });

                    // var pa = res.filter(function(nom){
                    //     return res.nom[j]===nom.secret[j]              
                    // });


                    // for (var j = 0; j < secret.length; j++) {
                       
                    //     console.log(res.mot[j])
                    //     if (res.mot[j] === pou[j]) {
                    //         console.log(res[j]);

                    //     } else {
                    //         console.log("oups... plus que " + j + "chances !")
                    //     }
                    // }





                // }


            }
        })
}
pendu()