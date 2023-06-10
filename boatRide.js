console.log("siva parameswara");
// chrges per hour 2 seater=240, 4seater=260, 8seater=560, 15seatr=990

function calculate(){
    event.preventDefault();
    var numofpersons=parseInt(document.getElementById("numberofpersons").value);
    var boatSeater=parseInt(document.getElementById("boatType").value);
    var duration=parseInt(document.getElementById("duration").value);
    var boatfare
    var numOfBoats=Math.trunc((numofpersons/boatSeater));
    console.log(numOfBoats,"parameswara");
    if((numofpersons%boatSeater)!=0){
        numOfBoats+=1
    }
    switch (boatSeater){
        case 2:
            boatfare=240;
            break
        case 4:
           
            boatfare=260;
            break
        case 8:
            boatfare=560;
            break
        case 15:
            boatfare=990;
            break

    }
console.log(boatfare,numOfBoats,duration)
    var bill=boatfare*numOfBoats*duration
    return document.getElementById("result").innerHTML=`your bill would be ${bill} Rupees`


}