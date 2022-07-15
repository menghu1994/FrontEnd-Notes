# [Typescript](https://ts.xcatliu.com/basics)

## 数组类型

```ts
let arr: number[] = [1,2,2,1];  // 定义元素都是number的数组类型

let arr: Array<number> = [1,2,3]; //数组泛型
```

> 类数组不是数组类型

```ts
function sum() {
    let args: number[] = arguments;  // error
}
```

> 常用类数组有自己的接口定义,`IArgument`,`NodeList`,`HTMLCollection`

```ts
interface IArguments {    // ts已经定义好
    [index: number]: any;
    length: number;
    callee: Function;
}

function sum() {
    let args: IArguments = arguments;
}
```

> 函数参数添加默认值,在ts中会将此参数识别为可选参数

```ts
function fullName(firstName: string, lastName: string = 'li'){  //lastName为被识别为可选参数,且不受到可选参数必须在必需参数后的限制
 return firstName + lastName
}
```

> 可选类型

```ts
let x?: number;
//  x 为 number 或 undefined
```

### 实战

[type-challenges](https://github.com/type-challenges/type-challenges/blob/main/README.zh-CN.md)


### 参考

[Typescript](https://wangtunan.github.io/blog/typescript/base.html#%E7%9B%AE%E5%BD%95)