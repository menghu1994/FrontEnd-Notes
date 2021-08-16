# interface
> 接口是一系列抽象方法的声明,是一些方法特征的集合,这些方法应该都是抽象的,需要由具体的类去实现。

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