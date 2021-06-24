# JavaScript

## 1. 算出两个的答案

```javascript
for (i = 0, j = 0; i < 10, j < 6; i++, j++) {
  k = i + j
}
console.log(k) // 10

for (i = 0, j = 0; i < 6, j < 10; i++, j++) {
  k = i + j
}
console.log(k) // 18
```

第一次：j=0,i=0, 符合条件，k=j+i=0;
第二次：j=1,i=1,符合条件，k=j+i=2;
第三次：j=2,i=2,符合条件，k=j+i=4;
第四次：j=3,i=3,符合条件，k=j+i=6；
第五次：j=4,i=4,符合条件，k=j+i=8;
第六次：j=5,i=5,符合条件，k=j+i=10;
第七次：j=6,i=6,符合条件，k=j+i=12(这里需要注意，循环继续的判断依据以分号前的最后一项为准，即判断 i<10 符不符合条件。
第八次：j=7,i=7,符合条件，k=j+i=14;
第九次：j=8,i=8,符合条件，k=j+i=16;
第十次：j=9,i=9,符合条件，k=j+i=18;
第十一次：j=10,i=10,不符合条件，循环结束。
for 循环共执行 10 次，k 的最终值等于 18。

## 2.split

```javascript
const sp = 'a,b,c,d,e,f'
console.log(sp.split(','))
// 答案 : [ 'a', 'b', 'c', 'd', 'e', 'f' ] 将字符串切割成数组的形式
```

## 3. join

```javascript
const jn = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(jn.join('|'))
// 答案 : a|b|c|d|e|f 将数组转换成字符串
```

## 4.数组方法

push()尾部添加
pop()尾部删除
unshift()头部添加
shift()头部删除

## 5. ajax 请求的时候 get 和 post 方式的区别

1、get 请求不安全(请求参数会在 url 中显示)，post 安全(在请求体中)
2、get 请求数据有大小限制，post 无限制
3、post 需要设置请求头。

## 6. call 和 apply 的作用与区别

共同的作用：call 和 apply 都是用来修改函数中 this 的指向问题

- call 方法可以传给该函数的参数分别作为自己的多个参数
- apply 方法必须将传给该函数的参数合并成一个数组作为自己的一个参数

- 当我们通过 call 和 apply 来 this 的指向时，不传任何参数，则默认为将 this 指向修改为 windows

## 7. 事件委托

利用事件冒泡的原理，让自己的所触发的事件，让他的父元素代替执行

## 8. 闭包是什么，有什么特性，对页面有什么影响

闭包就是能够读取其他函数内部变量的函数,使得函数不被 GC 回收，如果过多使用闭包，容易导致内存泄露



- 闭包的好处 

  (1)希望一个变量长期驻扎在内存当中(不被垃圾回收机制回收)

  (2)避免全局变量的污染

  (3)私有成员的存在

  (4)安全性提高

## 9. 阻止事件

- 阻止事件冒泡
  事件对象.cancelBubble = true

  - 事件流模型

  > - “事件冒泡”：事件开始由最具体的元素接受，然后逐级向上传播
  > - “事件捕捉”：事件由最不具体的节点先接收，然后逐级向下，一直到最具体的
  > - “DOM 事件流”：三个阶段：事件捕捉，目标阶段，事件冒泡

- 阻止默认事件
  1、return false
  2、事件对象.preventDefault()

## 10. 添加 删除 替换 插入到某个接点的方法

- 创建新节点
  createElement() //创建一个具体的元素
  createTextNode() //创建一个文本节点
- 添加、移除、替换、插入
  appendChild() //添加
  removeChild() //移除
  replaceChild() //替换
  insertBefore() //插入

- 查找
  getElementsByTagName() //通过标签名称
  getElementsByName() //通过元素的 Name 属性的值
  getElementsByClassName // 通过类名查询

## 11.jsonp

jsonp 是使用`方法回调`的原理(提供一个回调函数来接收数据)

## 12.算出结果

```javascript
for (var i = 1; i <= 3; i++) {
  //建议使用let 可正常输出i的值
  setTimeout(function () {
    console.log(i)
  }, 0)
}
// 答案：4 4 4。
// 原因：Javascript事件处理器在线程空闲之前不会运行。
```

## 13.正则表达式

```javascript
// 1. 判断字符串以字母开头，后面可以是数字，下划线，字母，长度为6-30
var reg = /^[a-zA-Z]\w{5,29}$/

// 2. 写一个function，清除字符串前后的空格。（兼容所有浏览器）
String.prototype.trim = function () {
  return this.replace(/^\s+/, '').replace(/\s+$/, '')
}
```

## 14.null 和 undefined

null 是一个表示"无"的对象，转为数值时为 0；undefined 是一个表示"无"的原始值，转为数值时为 NaN。

当声明的变量还未被初始化时，变量的默认值为 undefined。 null 用来表示尚未存在的对象

undefined 表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：

（1）变量被声明了，但没有赋值时，就等于 undefined。

（2）调用函数时，应该提供的参数没有提供，该参数等于 undefined。

（3）对象没有赋值的属性，该属性的值为 undefined。

（4）函数没有返回值时，默认返回 undefined。

null 表示"没有对象"，即该处不应该有值。典型用法是：

（1） 作为函数的参数，表示该函数的参数不是对象。

（2） 作为对象原型链的终点。

## 15.捕获异常

```javascript
try {
    
} catch (e) {
    
} finally {
    
}
```

## 16.Ajax 原理

(1)创建对象
var xhr = new XMLHttpRequest();
(2)打开请求
xhr.open('GET', 'example.txt', true);
(3)发送请求
xhr.send(); 发送请求到服务器
(4)接收响应
xhr.onreadystatechange =function(){}
(1)当 readystate 值从一个值变为另一个值时，都会触发 readystatechange 事件。
(2)当 readystate==4 时，表示已经接收到全部响应数据。
(3)当 status ==200 时，表示服务器成功返回页面和数据。
(4)如果(2)和(3)内容同时满足，则可以通过 xhr.responseText，获得服务器返回的内容

## 17.什么是 json

1、JSON 是一种轻量级的数据交换格式。
2、JSON 独立于语言和平台，JSON 解析器和 JSON 库支持许多不同的编程语言。
3、JSON 的语法表示三种类型值，简单值(字符串，数值，布尔值，null)，数组，对象

## 18.js 弹出窗口类型

alert 警告窗口
confirm 确认窗口
prompt 信息输入窗口