var candles= [5, 7, 8, 8, 6, 8];

function birthdayCakeCandles() {
    // Write your code here
    let rep = [];
    let max = candles[0];
    for(let i=0; i<candles.length; i++){
        if(candles[i] > max){
            max = candles[i];
        }
    }    
    for(let i = 0; i<candles.length; i++){
        if(max == candles[i]){
          rep.push(candles[i])  
        }
    }    
    
    return rep.length;
}
birthdayCakeCandles();

// function birthdayCakeCandles(arr) {
//     // Step 1
//     let max = 0;
//     let counter = 0;

//     // Step 2 (a)
//     arr.forEach(item => {
//         // Step 3
//         if (item > max) {
//             // Step 4
//             max = item;
//             counter = 1;
//             // Step 2 (b)
//         } else if (item === max) {
//             counter++;
//         }
//     });

//     return counter;
// }