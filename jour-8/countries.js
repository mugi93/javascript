var request = require("request");

var countriesNames = [];
function getCountriesName() {
    request.get("https://restcountries.eu/rest/v1/all",
        function (err, res, body) {



            
            // console.log(result)
            // console.log(result);
            // var count = result.name;
            // console.log(Object.values(result.name));

            //     var arr = array.push(count);
            //     console.log(arr);
            // var strCount =JSON.stringify(arr);
            // console.log(strCount)

            // for (var i = 0; i < result.length; i++) {
            //     var count = result[i].name;

            //     array.push(count)
            //     console.log(array);
            // }
            var result = JSON.parse(body);
            var arr = result.map(function (elem) {
                countriesNames.push(elem.name )


                //  console.log(elem.name);
            });
            console.log(countriesNames.join("-"));
          

        });
}
    getCountriesName()