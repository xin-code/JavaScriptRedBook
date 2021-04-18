/*
 * @Author: Xin https://github.com/Xin-code 
 * @Date: 2021-04-12 17:41:07 
 * @Last Modified by: Xin 
 * @Last Modified time: 2021-04-12 17:48:42
 */

console.log(`当不同部分共享或重用符号实例，则用symbol.for属性`)
let a = Symbol.for('foo')
console.log(typeof a)

// 重用foo符号的话 [全局符号注册表]
let b = Symbol.for('foo')
let c = Symbol.for('foo')

console.log(b==c) // 结果为true 都在全局注册表中使用相同的名字 所以结果为true


// 即使采用相同的符号描述，在全局注册表中定义的符号跟使用 Symbol()定义的符号也并不等同

let x = Symbol('A')
let y = Symbol.for('A')

console.log(x==y) // 结果为false 

// 全局注册表中使用keyFor来查询对应的字符串

console.log(Symbol.keyFor(b)) // 可以查询到b对应的字符串
console.log(Symbol.keyFor(c)) // 可以查询到c对应的字符串
console.log(Symbol.keyFor(y)) // 可以查询到y对应的字符串