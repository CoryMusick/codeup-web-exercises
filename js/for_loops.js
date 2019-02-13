function showMultiplcationTables(input){
    for(i = 1; i <= 10; i++){
        console.log(input + " * " + i + " = " + (input * i));
    }
}

showMultiplcationTables(7);



for(i = 1; i <= 10; i++){
var number = Math.floor(Math.random() * 200) + 20;
if(number % 2 === 0){
    console.log(number + " is even");

}else{
    console.log(number + " is odd");
}

}

for(i = 1; i < 10; i++){
    i = "" + i;
    console.log(i.repeat(i))
}

for(var i = 100; i >= 0; i -= 5){
    console.log(i);
}

