function generatePassword(num) {
    var password2 = ""
    
    if(num<6 || num>15){
        console.log("error")
    
    }else{for (var i =1; i <= num; i++) {

        var pass = Math.floor(Math.random() * (90 - 65 + 1) + 65);
        var password = String.fromCharCode(pass);
        var password2 = password2 + password;
        

    }
        console.log(password2);
    }

 
}

generatePassword(6);

// var pass = Math.floor(Math.random() * (90 - 65 + 1) + 65);
// var password = String.fromCharCode(pass)
// console.log(password);