let n = 10234;
function findDigits() {
  let count = 0;
  let num = n;
  while(n>0){
      let r = n%10;
      if(r !=0 && num%r == 0){
        count++;
        n = n/10;  
      }
  }
console.log(count);
}
findDigits();
