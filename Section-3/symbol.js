/*
 * @Author: Xin https://github.com/Xin-code 
 * @Date: 2021-04-12 17:16:26 
 * @Last Modified by: Xin 
 * @Last Modified time: 2021-04-12 17:34:29
 */

let sym = Symbol()
console.log(typeof sym)

let a = Symbol('zimuA')

let b = Symbol('zimuA')

console.log(a==b)

// symbol('传入一个字符串参数作为对符号的描述（ description），将来可以通过这个字符串来调试代码')
