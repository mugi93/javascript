var roundedNumber=3.6;
//console.log(Math.round(roundedNumber));
//console.log(Math.floor(roundedNumber));
//console.log(Math.ceil(roundedNumber));
//console.log(roundedNumber);
var enter = Math.floor(roundedNumber);
//console.log(enter);
var deci = roundedNumber - enter;
//console.log(deci);

if(deci<=0.5){
    console.log(Math.floor(roundedNumber));
}else {
    console.log(Math.ceil(roundedNumber));

}

