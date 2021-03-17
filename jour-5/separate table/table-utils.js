function multiply(num){
    // var num =process.argv[2]
    

    for (var i = 1 ; i<=10;i++){
        //  var num =parseInt(process.argv[2])
        var result= num * i;

       console.log(num+"x"+ i + "="+ result);



    }






}



function addition(num1){
    // var num1 = process.argv[2]

   

    for (var i = 1 ; i<=10;i++){
        //  var num1 =parseInt(process.argv[2])
       var result1= num1 + i;

       console.log(num1+"+"+ i + "="+ result1);



    }






}


module.exports ={
    addition,
    multiply,
};



// function multiply(num) {
//     // var min = 1;
//     var max = 10;
 
//     var args = process.argv.slice(2);
//     for (var i = 1; i <= max; i++) {
 
//         // min += i;
 
//         // var result = parseInt(process.arg[2]) * i;
 
//         console.log(parseInt(process.argv.slice(2)) * i);
 
        
//         // console.log(i);
 
 
//     }
 
//  }
 
//  multiply();
 
 
 
//  function multiply(num) {
 
//      var max = 10;
 
//      for (var i = 1; i <= max; i++) {
 
 
//          console.log(parseInt(process.argv.slice(2)) * i);
 
 
 
//      }
 
//  }
 
//  multiply();
 
//  function addition(num) {
 
//      var max = 10;
 
//      for (var i = 1; i <= max; i++) {
 
 
//          console.log(parseInt(process.argv.slice(2)) + i);
 
 
 
//      }
 
//  }
 
//  addition();
 
 
 
//      module.exports = {
//          multiply,
//          addition
//      };