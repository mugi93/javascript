var longNames =[
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];

var shortNames= longNames.map(function(names){
    
     var o ={}
	 o.name=names.firstName +" " + names.lastName;
//    names.name = names.firstName +" " + names.lastName;
     return o
});


console.log(shortNames)