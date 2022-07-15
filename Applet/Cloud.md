# 微信小程序云开发

## 初始化数据库

> 小程序端

```js
// 初始化数据库
const cloud =  wx.cloud().database();

// 查询数据库名为list中的数据信息
const DB = cloud.collection("list");
```

> 云函数端

```js
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const DB = cloud.database().collection("list")
```

### 添加数据库信息

```js
DB.add({
 data:{
  name: 'xiaoming',
  age: 18
 },
 success(res){
  console.log("添加成功", res)
 },
 fail(res) {
  console.log("添加失败", res)
 }
})
```

### 查询数据库信息

```js
DB.get({
 success(res){
  console.log("查询数据成功", res)
 },
 fail(res) {
  console.log("查询数据失败", res)
 }
})
```

### 删除数据库信息

```js
// 根据自动生成的id删除对应数据
DB.doc(id).remove({
 success(res){
  console.log("删除成功", res)
 },
 fail(res) {
  console.log("删除失败", res)
 }
})
```

### 修改数据库信息

```js
// 根据自动生成的id修改对应数据
DB.doc(id).update({
 data:{
  "name":"li",
  "age": 12
 },
 success(res){
  console.log("删除成功", res)
 },
 fail(res) {
  console.log("删除失败", res)
 }
})
```

## 云函数

### 添加云函数

```

```

### 调用云函数

```js
// 调用add云函数
wx.cloud.callFunction({
 name:"add",
 data:{
  a: 1,
  b: 2
 },
 success(res){
  console.log("请求成功",res)
 },
 fail(res){
  console.log("请求失败",res)
 }
})
```
