

function multiply(num){
    // var num = process.argv[2]

   
    for (var i = 1 ; i<=10;i++){
       var result= num * i;

       console.log(num+"x"+ i + "="+ result);



    }

}

multiply(parseInt(process.argv[2]));


