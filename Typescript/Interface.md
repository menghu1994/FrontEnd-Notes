# [interface](https://ts.xcatliu.com/basics/type-of-object-interfaces.html)
> 接口是一系列抽象方法的声明,是一些方法特征的集合,这些方法应该都是抽象的,需要由具体的类去实现。
> 定义接口类型的变量属性必须与接口内一致,除非是(?)可选属性
> 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集

```ts
interface Person {
	readonly id: number;	// 只读属性，只能初始化赋值，不能修改
	name: string;			// ;分号
	age?: number; 			// 可选属性
	[propName: string]: any;	// 定义了任意属性取 string 类型的值
}

let tom: Person = {
	id: 1;
	name: 'tom',			// 必写属性name
	gender: 'male'			// 任意属性
}

tom.id = 2; // error, 只读属性不能赋值
```
```typescript
interface List {
	[index: number]: string
}

let listDetail: List
```

## 接口继承
> 接口可以通过其他接口扩展自己,继承关键字`extends`

```typescript
interface Person {
	age: number
}

interface Doctor extends Person {
	instrument: string
}

let Amy = <Doctor>{
	age: 18,
	instrument: 'Scalpel'
};
```

## 强制类型转换
```ts
interface Per = {
	name: string
}
 
let teacher = {};
teacher.name = "tony"	// error
(result as Per).name  = "tony"	//类型断言


let doctor = <Per>{}
doctor.name = "wang"
```

## <T> [泛型](https://ts.xcatliu.com/advanced/generics.html)
> 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
> <T>表示任意类型,<T>和any的区别在于: 定义类型的any和返回值any可以表示不同类型,<T>的定义类型和返回类型表示相同类型
```ts

```