var s = "";
var o = "o"
var x = "x"
var count = 0
var count2 = 0
function countEach(s) {
    var tableau = s.split("")

    for (var i = 0; i <= s.length; i++) {


        if (tableau[i] === "o") {
            count = count + 1

        } else if (tableau[i] === "x") {
            count2 = count2 + 1

        }

    }
    if(count2===count){
        console.log("true");
    }else{
        console.log("false");
    }
    //console.log(count, count2);
}


countEach("xoxoxoxo");