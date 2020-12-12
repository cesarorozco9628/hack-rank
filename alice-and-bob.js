let alice = 0;
let bob = 0;
let a = [6,5,7];
let b = [5,6,7];
function comparacion(){
    let c = 0;
    for (let i=0; i<a.length; i ++) {
        if (a[i] > b[i]) {
            alice ++;
        }
        if (a[i] < b[i]) {
            bob ++;
        }

         c = [alice , bob];
    }
   console.log(c);
}

comparacion();