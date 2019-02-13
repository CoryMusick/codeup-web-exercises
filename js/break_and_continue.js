for(var i = 1; i > 0; ){
    var input = prompt("Please enter an odd number between 1 and 50");
    if( isNaN(input)){
        alert('That is not a number, please try again.');
        continue
    }
    if (input > 50 || input < 1){
        alert('That number is not in range, please try again');
        continue
    }
    if( input % 2 === 0){
        alert('ODD number please.');
        continue
    }else{
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