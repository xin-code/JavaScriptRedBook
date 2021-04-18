/*
 * @Author: Xin https://github.com/Xin-code 
 * @Date: 2021-03-27 10:41:57 
 * @Last Modified by: Xin 
 * @Last Modified time: 2021-04-12 16:33:34
 */

console.log(name);  // undefined
var name = 'tony';

console.log(age); // 报错 let不能提升，ReferenceError
let age = 18;

// 在解析代码时， JavaScript 引擎也会注意出现在块后面的 let 声明，只不过在此之前不能以任何方
// 式来引用未声明的变量。在 let 声明之前的执行瞬间被称为“暂时性死区”（ temporal dead zone），在此
// 阶段引用任何后面才声明的变量都会抛出 ReferenceError