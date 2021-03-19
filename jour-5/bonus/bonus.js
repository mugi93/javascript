var prompt = require("prompt");
var colors = require('colors');

prompt.start();

var secret = "poule"

function motus(){


    prompt.get({
        name:"mot",
        validator:/^[a-zA-Z]+$/,
        description :"choisir un mot de 5 lettres",
    }),
    function(err,res){
        secret.split("")
        for(var i=1;i<=6;i++){
            for(var j=0;j<secret.length;j++){
                
            }



            if(res.mot){

            }
        }

    }

}