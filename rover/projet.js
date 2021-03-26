var grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [],
};







//fonction pour tourner à droite

function turnRight(rover) {
    if (rover.direction === "N") {
        rover.direction = "E";
    } else if (rover.direction === "E") {
        rover.direction = "S";
    } else if (rover.direction === "S") {
        rover.direction = "W";
    } else {
        rover.direction = "N";
    }
    // console.log(rover);
};
// turnRight(rover);


//fonction pour tourner à gauche

function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "W";
    } else if (rover.direction === "W") {
        rover.direction = "S";
    } else if (rover.direction === "S") {
        rover.direction = "E";
    } else {
        rover.direction = "N";
    }

    // console.log(rover);
};
// turnLeft(rover);

// fonction pour bouger 
function moveFoward(rover) {
    if(rover.direction==="E"){
        if(rover.x<9){
            rover.x++
            rover.travelLog.push("x:" + rover.x+","+ "y:" + rover.y);
        }else {
            console.log("error")
            return
        };
    };
    if(rover.direction==="W"){
        if(rover.x>0){
            rover.x++
            rover.travelLog.push("x:" + rover.x+","+ "y:" + rover.y);
        }else {
            console.log("error")
            return
        };
    };
    if(rover.direction==="S"){
        if(rover.y<9){
            rover.y++
            rover.travelLog.push("x:" + rover.x+","+ "y:" + rover.y);
        }else {
            console.log("error")
            return
        };
    };
    if(rover.direction==="N"){
        if(rover.x>0){
            rover.y++
            rover.travelLog.push("x:" + rover.x+","+ "y:" + rover.y);
        }else {
            console.log("error")
            return
        };
    };




    

};

// moveFoward(rover);


// fonction pour reculer
function moveBackWard(rover){
    if (rover.direction==="N"&&rover.y<9){
        rover.y++
        rover.travelLog.push("x:" + rover.x+","+ "y:" + rover.y);
    }else if(rover.direction==="S"&&rover.y>0){
        rover.y--
        rover.travelLog.push("x:" + rover.x+","+ "y:" + rover.y);
    }else if(rover.direction==="E"&&rover.x>0){
        rover.x--
        rover.travelLog.push("x:" + rover.x+","+ "y:" + rover.y);
    }else if(rover.direction==="W"&&rover.x<9){
        rover.x++
        rover.travelLog.push("x:" + rover.x+","+ "y:" + rover.y);
    }

}


// fonction outil

function pilotRover(pilot) {

    for (var i = 0; i < pilot.length; i++) {

        if (pilot[i] === "l") {
            turnLeft(rover);
        } else if (pilot[i] === "r") {
            turnRight(rover);
        } else if (pilot[i] === "f") {
            moveFoward(rover);
        } else if (pilot[i]=== "b"){
            moveBackWard(rover)
        }else {
            console.log("error");
            return
        };
        
          console.log(rover)
    };
    
   
   
        


};

// pilotRover("ff");



var prompt = require("prompt");
var option = {
    name: "direction",
    validator: /^[a-zA-Z]/,
    description: "utiliser juste les lettre r, l et f",
}

prompt.get(option,
    function (err, res) {
        if (err) {
            console.error(err);
            return

        }else {
            pilotRover(res.direction)

        };



    });

