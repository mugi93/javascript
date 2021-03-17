//exo 1

// var i=50;
// while(i<=100){
//     if(i%2==0){
//         console.log(i);
//     }
//     i++

// }

//exo 2
// var dice=null;
// var count = 0;
// while(dice===6){
//     dice=Math.floor(Math.random()*(6-1+1)+1);
//     count ++ ;
    
    
// }
// console.log(count);
// exo 3
var ussainBolt=0;
var tysonGay=0;

while(ussainBolt>100 || tysonGay>100){
    var num =Math.floor(Math.random()*(10-1+1)+1);
   ussainBolt=ussainBolt+num;
    
   var num2=Math.floor(Math.random()*(10-1+1)+1);
    tysonGay=tysonGay+num2;
    
    
   
} if(ussainBolt>100){
        console.log(ussainBolt);

    }else {
        console.log(tysonGay);
    }
