(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    //
    // planetsString = planetsArray.join('<br>');
    // console.log(planetsString);
    //

    //bonus


    function makeArrayUL(array){
    let newArray = [];

    for(let i = 0; i < array.length; i++){
       let slice = array.slice(i,i+1);
       slice.unshift('<li>');
       slice.push('</li>');
        let string = slice.join('');
        newArray.push(string)
    }
    newArray.unshift('<ul>');
    newArray.push('</ul>');
    return newArray.join('');
    }

    console.log(makeArrayUL(planetsArray));

})();
