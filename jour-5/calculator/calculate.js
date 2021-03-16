
function calculate (test) {

  
    

    var args = process.argv.slice(2);


    if (process.argv[3]=== "+"){
        console.log(parseInt(process.argv[2]) + parseInt(process.argv[4]));

    }else if (process.argv[3]=== "-"){
        console.log(parseInt(process.argv[2]) - parseInt(process.argv[4]));
    }
    else if (process.argv[3]=== "/"){
        console.log(parseInt(process.argv[2]) / parseInt(process.argv[4]));
    
    }
    else if (process.argv[3]=== "x"){
        console.log(parseInt(process.argv[2]) * parseInt(process.argv[4]));

    }
    

}

calculate();



// function calculate (num , num2, operateur){
//     if(operateur= "+"){
//         console.log(num + num2);
    
//     }else if(operateur="-"){
//         console.log(num - num2);
    
//     }else if(operateur="/"){
//         console.log(num / num2);
    
//     }else if(operateur="x"){
//         console.log(num * num2);
//     }

    



// }





// function calculate (test) {

  
//     // if (i > 0) {
//     //     console.log(parseInt(process.argv[2]) * parseInt(process.argv[3]));

//     // }

//     var args = process.argv.slice(2);

    
//     console.log(parseInt(process.argv[2]) / parseInt(process.argv[3]));

// }

// calculate();