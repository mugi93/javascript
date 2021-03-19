const moment = require("moment");

function formatDate(x) {
     y =new Date(x);
    // var time = moment(y).add( 'days').calendar();
     moment.locale('fr')

    //var z = parseInt(x)

     var y = moment(y).format('L');

    // var y = moment();
    console.log(y);
    //  var p = y.format('L');
    //  console.log(p);

    //  var time = moment(y).add( 'days').calendar();
    // console.log(time);

}


 formatDate("2020-2-18")


//exo 2
function calculateAge(a){
    // moment.locale('fr')
    // var age =  moment(a, "MM/DD/YYYY").fromNow().split(" ")[0];
    // console.log(age);
    var m = new Date(a)
    
  var month = moment().diff(m, 'months');

    //  console.log(month);
    var birth= Math.floor(month/12)
    console.log(birth)


}

calculateAge("02/14/2000");