function format(num){
    var hour = Math.floor(num/3600);
    
    num = num - (hour *3600);
    
    var minute = Math.floor(num/60);
    
    num = num - (minute*60);
    
    var seconde = num;
    
    
    if(hour >0){
        console.log("heure :", hour)
    }if(minute >0){
        console.log("minute :", minute)
    }if(seconde>0){
        console.log("seconde :", seconde)
    };
}
console.log(format(3700));

