var cakes =[
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
];

var sold = cakes.map(function(mot){
    var out= mot.flavor;
    if(out==="chocolate"){
        mot.status="sold out"
    }
    return out
    
});
var choco = cakes.filter(function(late){
    return late.status=="sold out"
})

console.log(choco);