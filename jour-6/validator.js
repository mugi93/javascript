// - À l'aide du package `prompt`, créez une fonction `checkProfile` qui demande à l'utilisateur un email, un username et un mot de passe
// - La fonction vérifiera que l'utilisateur a saisi des informations valides (regardez la doc, et plus precisement les `pattern`) :
//     - l'email doit être au bon format
//     - le username ne doit comporter que des lettres, chiffres et tirets (les petits)
//     - le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets
// - Si tout est bon, elle retourne "All good !", sinon elle retourne "error"




var prompt = require("prompt");




var validation = [
    {
        name:"email",
        validator:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
     },
     {
         name:"username",
         validator:/^[a-zA-Z\s\-]+$/,
     },

     {
         name:"password",
        validator :/^[a-zA-Z0-9-]{5,}[a-zA-Z]+[0-9]*$/,

     }


]
prompt.start();


prompt.get(["username", "email", "password"],
    function (err, res) {
        if (err) {
            console.log("error")
            return onErr(err);
        }

        console.log("Données reçues :");
        console.log("=> Username : " + res.username); 
        console.log("=> Email : " + res.email); console.log("=> Password :"+ res.password)
        console.log("All good !")

    });