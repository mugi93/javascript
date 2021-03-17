

function multiply(num){
    var num = process.argv[2]

   var num = 5

    for (var i = 1 ; i<=10;i++){
       var result= num * i;

       console.log(num+"x"+ i + "="+ result);



    }






}
multiply(parseInt(process.argv[2]));


function multiply(num) {
   // var min = 1;
   var max = 10;

   var args = process.argv.slice(2);
   for (var i = 1; i <= max; i++) {

       // min += i;

       // var result = parseInt(process.arg[2]) * i;

       console.log(parseInt(process.argv.slice(2)) * i);

       
       // console.log(i);


   }

}

multiply();