# Vue

## vue 优点？

答：轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十 kb；
简单易学：国人开发，中文文档，不存在语言障碍 ，易于理解和学习；
双向数据绑定：保留了 angular 的特点，在数据操作方面更为简单；
组件化：保留了 react 的优点，实现了 html 的封装和重用，在构建单页面应用（SPA）方面有着独特的优势；
视图，数据，结构分离：使数据的更改更为简单，不需要进行逻辑代码的修改，只需要操作数据就能完成相关操作；
虚拟 DOM：dom 操作是非常耗费性能的， 不再使用原生的 dom 操作节点，极大解放 dom 操作，但具体操作的还是 dom 不过是换了另一种方式；
运行速度更快:相比较与 react 而言，同样是操作虚拟 dom，就性能而言，vue 存在很大的优势。

## MVVM

M---Model （数据）
V---View 　　(视图)
VM---VIewModel (转换器)

## vue 父组件向子组件传递数据？

props

## 子组件像父组件传递事件？

`$emit` 方法

## v-show 和 v-if 指令的共同点和不同点？

答:共同点：都能控制元素的显示和隐藏；
不同点：实现本质方法不同，
v-show 本质就是通过控制 css 中的 display 设置为 none，控制隐藏，只会编译一次；
v-if 是动态的向 DOM 树内添加或者删除 DOM 元素，若初始值为 false，就不会编译了。
总结：如果要频繁切换某节点，使用 v-show(切换开销比较小，初始开销较大)。如果不需要频繁切换某节点使用 v-if（初始渲染开销较小，切换开销比较大）。

## 如何让 CSS 只在当前组件中起作用？

答：在组件中的 style 前面加上 scoped

## <keep-alive></keep-alive>的作用是什么?

答:keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。

## 如何获取 dom?

答：ref="domName" 用法：this.\$refs.domName

## 说出几种 vue 当中的指令和它的用法？

答：v-model 双向数据绑定；

> v-model 用于表单数据的双向绑定，其实它就是一个语法糖，这个背后就做了两个操作：
> v-bind 绑定一个 value 属性；
> v-on 指令给当前元素绑定 input 事件。

v-for 循环；
v-if v-show 显示与隐藏；
v-on 绑定事件；可以简写成`@`click
v-bind 绑定数据；可以简写成`:`
v-once: 只绑定一次。

## vue-loader 是什么？使用它的用途有哪些？

答：vue 文件的一个加载器，将 template/js/style 转换成 js 模块。
用途：
js 可以写 es6
style 样式可以 scss 或 less

## 为什么使用 key?

答：需要使用 key 来给每个节点做一个唯一标识，Diff 算法就可以正确的识别此节点。作用主要是为了高效的更新虚拟 DOM。

## axios 及安装?

答：请求后台资源的模块。
npm install axios --save 装好，
js 中使用 import 进来，然后.get 或.post。返回在.then 函数中，失败则是在.catch 函数中。

## 请说出 vue.cli 项目中 src 目录每个文件夹和文件的用法？

答：assets 文件夹是放静态资源；components 是放组件；router 是定义路由相关的配置; app.vue 是一个应用主组件；main.js 是入口文件。

## 分别简述 computed 和 watch 的使用场景

答：
computed:
　　　　当一个属性受多个属性影响的时候就需要用到 computed
　　　　例子：购物车商品结算的时候
watch:
　　　　当一条数据影响多条数据的时候就需要用 watch
　　　　例子：搜索数据

## v-on 可以监听多个方法吗？

答：可以，

```vue
<input type="text" v-on="{ input: onInput, focus: onFocus, blur: onBlur }" />。
```

## `$nextTick` 的使用

答：当你修改了 data 的值然后马上获取这个 dom 元素的值，是不能获取到更新后的值，
你需要使用 `$nextTick` 这个回调，让修改后的 data 值渲染更新到 dom 元素之后在获取，才能成功
