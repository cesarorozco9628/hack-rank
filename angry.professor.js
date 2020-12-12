      
      let a = [-1,-9,9];
      let time = 0;
      let k = 3;
  for (let i = 0; i< a.length ; i++) {
      if (a[i] <= 0){
          time ++;
      }   
  }
  if ( time >= k){
      console.log('no') ; 
  }else {
      console.log ('yes') ;
  }


//   function angryProfessor() {
//     let count = 0;
//     for (let num of a) {
//         if (num <= 0) {
//         count++;
//         }
//     }
//     if (count >= k) {
//         return 'NO'
//     } else {
//         return 'YES'
//     }
  
// }
