
function suma() {
var  sum = 0;
    var suma = [5, 6, 7, 8]
    for(var i=0 ; i<suma.length ; i++){
        var val = suma[i]
        sum= sum + val
    }
    console.log(sum)
}
suma();

function center() {
    var array = [5, 6, 7, 6, 10, 8, 9,89];
    var center = array.length%2 ;
    if (center == 0){
        console.log(array[array.length/2]);
        console.log(array[(array.length/2)-1]);
    }
    else {
        console.log(array[(array.length/2)-0.5]);
    }

    return center;
}

center();

