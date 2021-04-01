var request = require("request");

function catchPokemon(num) {
    var url ="https://pokeapi.co/api/v2/pokemon/"
            num.toString()
            num=url+num
            console.log(num);

    request.get(num,
        function (err, res, body) {

            var pokemon=JSON.parse(body);
            // console.log(pokemon);
        //    console.log(pokemon)
        console.log(pokemon.forms[0].name);

            
            

        });

};
catchPokemon(898);

// function catchPokemon(id) {
//     var url = "https://pokeapi.co/api/v2/pokemon/" + id;

//     request.get(url, function (err, res, body) {
//         var pokemon = JSON.parse(body)
    
//         console.log("id:", id);
//         console.log("name:", pokemon.name);
//     });
// }

catchPokemon(25) //Pikachu