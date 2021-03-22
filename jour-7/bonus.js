var prompt = require("prompt");

prompt.start();

var secret = "poule"

function pendu(){


    prompt.get({
        name:"mot",
        validator:/^[a-zA-Z]+$/,
        description :"choisir un mot de 5 lettres",
    }),

    function(err,res){
        var pou=secret.split("")
        for(var i=1;i<=10;i++){
            for(var j=0;j<secret.length;j++){
                if(res.mot[j]===pou){
                    console.log(res.mot[j]);

                }
            }



        }  
