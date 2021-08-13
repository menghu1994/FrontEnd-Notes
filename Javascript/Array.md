# Array

> 数组降维
```javascript
  const array2d = [[1,2,3],[4,5,6],[7,8,9]]
  console.log([].concat(...array2d))
  // 数组降维的另外一种方式, nodejs 11+ 支持
  console.log(array2d.flatMap(x=>x))
```
> 数组拼接
```javascript
 const a = [1,2,3];
 const b = [4,5,6];
 console.log([...a,22,23,...b,33,31])
```

## 方法
 - find
 ```javascript
  const arr = [1,2,3,4,5,6];
  let findArr = arr.find( item => item>3 ) //4
  // find方法的参数是一个回调函数,返回第一个符合条件的数组元素
 ```
 - filter
 ```js
  // 过滤符合条件的数组元素
 let userArr = [
  { id:1, name:"张三"},
  { id:2, name:"李四"},
  { id:3, name:"王五"}
 ]
 let filterArr = userArr.filter(item, index, array){

 }

 // 数组去重
  var myArr = [1,3,4,5,6,3,7,4];
  console.log(myArr.filter((value,index,arr)=>arr.indexOf(value)===index));
  //[ 1, 3, 4, 5, 6, 7 ]
 ```