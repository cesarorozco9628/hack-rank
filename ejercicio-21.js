var array = [
    [1, 2, 3, 4],
    [4, 2, 3, 6]
];
var suma = 0;
for(i = 0; i<array[0].length; i++){
    suma += array[0][i] + array[1][i];
}

console.log(suma);

