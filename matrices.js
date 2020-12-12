var arr = [ [5,8,6],[5,9,6], [8,3,2]];

function diagonalDifference() {
    // Write your code here
    const dim = arr[0].length;
    let first_diagonal_sum = 0;
    let secomd_diagonal_sum = 0;
    let sum = 0;
    for(let i=0, j=(dim-1); i < arr.length, j> -1; i++ , j--){
        first_diagonal_sum += arr[i][i];
        secomd_diagonal_sum += arr [i][j];
    }
    sum = first_diagonal_sum - secomd_diagonal_sum ;
    if(sum > 0){
        console.log(sum);
    }
    if (sum<0){
        console.log(Math.abs(sum));
    }
    if (sum == 0){
        console.log(sum);
    }

}

diagonalDifference();