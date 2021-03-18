function calculateAge(y) {
    var age = new Date(y);
    var toto = age.getFullYear();
    console.log(toto);
    
    var v = new Date();
    var now = v.getFullYear();
    console.log(now);

    var ageActuel = now - toto;
    var rt = (1 + age.getMonth());
    var nrt = (1 + v.getMonth());
    
    if (nrt - rt < 0) {
        console.log(ageActuel - 1);
    
    } else {
        console.log(ageActuel);
    }
}

calculateAge("1994-05-10");