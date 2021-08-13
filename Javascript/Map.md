# Map
> `map` 与Object最大的差别是Map允许任何类型的键(key)

## 属性和方法
 - new Map()   // 创建map
 - map.set(key, value)	// 设置存储键和值
 - map.get(key)		// 根据键返回值,如果没有相应key,返回undefined
 - map.has(key)		//	如果key存在返回true
 - map.delete(key)		//	删除指定键的值
 - map.clear() 		// 清空map
 - map.size			// 返回当前元素的个数

## 迭代
 - map.keys() 		// returns an iterable for keys
 - map.values()		// returns an iterable for values
 - map.entries()	// returns an iterable for entries, Create a map from Object like `new Map(Object.entries(obj))`
 - Object.fromEntries() // create Object from map

> Other examples
```js
 let recipeMap = new Map([
	  ['apple', 500],
	  ['tomatoes', 350],
	  ['orange',    50]
	]);

 recipeMap.forEach( (value, key, map) => { ... } )

let price = Object.fromEntries( recipeMap.entries() ); // return Object {'apple': 500, 'tomatoes': 350, 'orange': 50}
```