// var i = 0;
// var x = 1;
//
// while ( i <= 15){
//
//     console.log(x = x * 2);
//     i++;
// }

var allCones = Math.floor(Math.random() * 50) + 50;

while (allCones >= 0){

    var purchasedCones = Math.floor(Math.random() * 5) + 1;

    if (allCones >= purchasedCones && allCones !== 0){
    allCones -= purchasedCones;
    console.log(purchasedCones + " cones sold..." + allCones + " cones left")
    }else if(purchasedCones > allCones && allCones !== 0){
        console.log("Cannot sell you " + purchasedCones + " cones I only have " + allCones)

    }else{
        console.log('Yay I sold them all!');
    break;
    }
}
