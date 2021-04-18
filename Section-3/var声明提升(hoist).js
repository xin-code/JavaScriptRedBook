/*
 * @Author: Xin https://github.com/Xin-code 
 * @Date: 2021-03-27 10:34:01 
 * @Last Modified by: Xin 
 * @Last Modified time: 2021-03-27 10:37:10
 */


function foo() {
  console.log(age);
  var age = 18;
}

foo() // undefined

/*
var的声明提升(hoist) 把上面的函数变为
function foo() {
  var age; // age 是没有赋值的
  console.log(age);
  age = 18;
}
*/