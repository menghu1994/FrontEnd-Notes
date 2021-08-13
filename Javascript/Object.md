### 获取实例对象的原型 `Object.getPrototypeOf`
> 不建议使用 `__proto__`,这不是语言本身的特性,是浏览器厂商的实现
> `Object.getPrototypeOf(ChildClass) === FatherClass` 判断一个类是否继承另一个类