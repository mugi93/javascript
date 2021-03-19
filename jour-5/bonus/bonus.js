var prompt = require("prompt");
var colors = require('colors');

prompt.start();

var secret = "poule"

function motus(){


    prompt.get({
        name:"mot",
        validator:/^[a-zA-Z]+$/,
    }),
    function(err,res){
        secret.split("")
        for(var i=1;i<=6;i++){
            if(res.mot)
        }

    }

}