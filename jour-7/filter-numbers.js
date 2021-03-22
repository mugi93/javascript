var array = [1, "toto", 34, "javascript", 8];
var numbers =array.filter(function(number){
    return(typeof number==="number");
});
console.log(numbers);