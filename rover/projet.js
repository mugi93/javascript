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
};

//fonction pour tourner à droite

function turnRight(rover) {
    if (rover.direction === "N") {
        rover.direction = "E";
    }else if (rover.direction==="E"){
        rover.direction="S"
    }else if(rover.direction==="S"){
        rover.direction="W"
    }else{
        rover.direction="N"
    }
    console.log(rover);
};
// turnRight(rover);


//fonction pour tourner à gauche

function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "W";
    }else if (rover.direction==="W"){
        rover.direction="S"
    }else if(rover.direction==="S"){
        rover.direction="E"
    }else{
        rover.direction="N"
    }

    console.log(rover);
};
// turnLeft(rover);

// fonction pour bouger 
function moveFoward(rover) {
   
    if(rover.direction==="E"){
            rover.y++
    }else if (rover.direction==="W"){
            rover.y--
    }else if (rover.direction==="S"){
        rover.x++
    }else{
        rover.x--
    }

    console.log(rover)
};

// moveFoward(rover);


// fonction outil

function pilotRover(pilot){
    for(var i=0;i<pilot.length;i++){
        if(pilot[i]==="l"){
            turnLeft(rover)
        }else if (pilot[i]==="r"){
            turnRight(rover)
        }else if (pilot[i]==="f"){
            moveFoward(rover)
        }else{
            console.log("error")
        }
        
    }
}
pilotRover("lpoo")