var request = require("request");

function getFact() {
    request.get("https://api.chucknorris.io/jokes/random",
        function (err, res, body) {
            var norris=JSON.parse(body);
            // console.log(norris);
            console.log(norris.value);






        });


}
getFact();