// 给定某无序数组，要求去除数组中的重复数字并且返回新的无重复数组
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]

// 方法一
console.log(Array.from(new Set(array)))

// Set是es6新增的数据结构，似于数组，但它的一大特性就是所有元素都是唯一的，没有重复的值，我们一般称为集合
// Set本身是一个构造函数，用来生成 Set 数据结构

// 方法二
function unique(arr) {
  for(let i = 0 ; i<arr.length;i++){
    for(let j = i+1 ; j<arr.length;j++){
      if(arr[i]===arr[j]){
        arr.splice(j,1)
        j--
      }
    }
  }
  return arr
}

console.log(unique(array))