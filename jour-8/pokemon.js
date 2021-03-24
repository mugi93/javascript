var request = require("request");

function catchPokemon() {
    request.get("https://pokeapi.co/api/v2/pokemon",
        function (err, res, body) {
            var pokemon=JSON.parse(body);

        });

};
catchPokemon();