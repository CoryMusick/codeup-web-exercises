for(var i = 1; i > 0; ){
    var input = prompt("Please enter an odd number between 1 and 50");
    if( input <= 50 && input >= 1 && input % 2 === 1){
        break;
    }
}

for(var j = 1; j <= 50; j++){
    if(j === +input){
        console.log("Yikes, Skipping number " + j)
    }else{
        console.log('Here is an odd number: ' + j)
    }
}