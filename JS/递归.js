/*
 * @Author: Xin https://github.com/Xin-code 
 * @Date: 2021-06-24 23:28:30 
 * @Last Modified by: Xin 
 * @Last Modified time: 2021-06-24 23:38:32
 */

function A(num) {
  if(num === 0){
    return 1;
  }else{
    return num*A(num-1)
  }
}

console.log(A(4));