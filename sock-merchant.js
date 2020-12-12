let ar = [10,20,30,10,20];
let n = 4;
function sockMerchant() {
    let sorted = ar.sort( (a,b) => a - b);
    let pairs = 0;

    for (let i = 0; i < ar.length; i++) {
        if ( sorted[i] === sorted[i + 1]) {
            pairs++;
            i += 1;
        }
    }

    console.log(pairs);

}
sockMerchant();