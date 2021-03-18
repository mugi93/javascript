
// var str = ""


// function formDate(str){
// var demo = new Date();
// console.log(demo.getDate(),demo.getMonth()+1,demo.getFullYear());


// }
//var date = new Date()
// var date =demo.getMilliseconds();
// var month = date.toString()

// console.log(demo);

// var year = demo.getFullYear();
// console.log(year);

// var year = date.getFullYear();
// console.log(year);
// function formatDate(date) {
//     var year = date.getFullYear();

//     var month = (1 + date.getMonth()).toString();
//     if(month.length > 1){
//         month = '0' + month;
//     }


//     var day = date.getDate().toString();
//     if(day = day.length > 1){
//         day = '0' + day;
//     }


//     return month + '/' + day + '/' + year;
//   }

//   formatDate()
// var date = new Date("2021-03-08");
function formatDate(x) {
    y =new Date(x);

    var month = (1+ y.getMonth());
    var year = y.getFullYear();
    var day = y.getDate();

    // if(day.length > 1 && month.length > 1){
    //     day = "0"+ day 
    //     month = "0" + month;
    // }

    console.log(month);
    console.log(year);
    console.log(day);
    // return month + year + day
    console.log(day + '/' + month + '/' + year)
}
formatDate("2020-2-18")