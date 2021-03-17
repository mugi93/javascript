
// function calculate (num , operateur , num2) {

  
    

//     var args = process.argv.slice(2);


//     if (process.argv[3]=== "+"){
//         console.log(parseInt(process.argv[2]) + parseInt(process.argv[4]));

//     }else if (process.argv[3]=== "-"){
//         console.log(parseInt(process.argv[2]) - parseInt(process.argv[4]));
//     }
//     else if (process.argv[3]=== "/"){
//         console.log(parseInt(process.argv[2]) / parseInt(process.argv[4]));
    
//     }
//     else if (process.argv[3]=== "x"){
//         console.log(parseInt(process.argv[2]) * parseInt(process.argv[4]));

//     }else {
//         console.log("error");
//     }
    

// }

// calculate(parseInt(process.argv[2]) , parseInt(process.argv[4]));



function calculate (num , operateur, num2){
    var num = parseInt(process.argv[2]) 
    var num2 = parseInt(process.argv[4])
    var operateur =  process.argv[3];

    var args = process.argv.slice(2);
    if(operateur=== "+"){
        console.log(num + num2);
    
    }else if(operateur==="-"){
        console.log(num -num2);
    
    }else if(operateur==="/"){
        console.log(num / num2);
    
    }else if(operateur==="x"){
        console.log(num * num2);
    }

    



}
calculate();





// function calculate (test) {

  
//     // if (i > 0) {
//     //     console.log(parseInt(process.argv[2]) * parseInt(process.argv[3]));

//     // }

//     var args = process.argv.slice(2);

    
//     console.log(parseInt(process.argv[2]) / parseInt(process.argv[3]));

// }

// calculate();