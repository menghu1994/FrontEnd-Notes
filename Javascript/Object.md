### 获取实例对象的原型 `Object.getPrototypeOf`
> 不建议使用 `__proto__`,这不是语言本身的特性,是浏览器厂商的实现
> `Object.getPrototypeOf(ChildClass) === FatherClass` 判断一个类是否继承另一个类

#### Object.assign()
```js
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// 将 permissions1 和 permissions2 中的所有属性都拷贝到 user 中
Object.assign(user, permissions1, permissions2);

// user = { name: "John", canView: true, canEdit: true }
```