// 冒泡排序
// 从小到大

let Num = [1,7,2,3,9]

function bubbleSort(arr) {
  for(let i = 0 ; i < arr.length; i++){
    for(let j = 0 ; j < arr.length - i;j++){
      if(arr[j]>arr[j+1]){
        var temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

// 测试
console.log(bubbleSort(Num))


// 从大到小
function bubbleSort2(arr) {
  for(let i = 0 ; i < arr.length;i++){
    for(let j = 0 ; j< arr.length-i;j++){
      if(arr[j+1]>arr[j]){
        var temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

// 测试
console.log(bubbleSort2(Num))


// ⭐重点
// 1、第一个循环，确定循环的次数
// 2、第二个循环，确定相邻两个元素之间的位置
// 3、通过判断比较相邻两个元素的大小，并交换位置