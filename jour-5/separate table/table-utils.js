function multiply(num){
    // var num =process.argv[2]
    

    for (var i = 1 ; i<=10;i++){
         var num =parseInt(process.argv[2])
        var result= num * i;

       console.log(num+"x"+ i + "="+ result);



    }






}
multiply();


function addition(num1){
    // var num1 = process.argv[2]

   

    for (var i = 1 ; i<=10;i++){
         var num1 =parseInt(process.argv[2])
       var result1= num1 + i;

       console.log(num1+"+"+ i + "="+ result1);



    }






}
addition();

module.exports ={
    addition,
    multiply,
};