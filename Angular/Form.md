# Form
FormControl  追踪单个表单控件的值和验证状态
FormGroup	
FormArray
ControlValueAccessor

## 响应式表单


## 模板驱动表单
 


# setValue vs patchValue[<sup>1</sup>(#refer-anchor-1)]
> setValue must set the value of all the controls
```ts
formgroup.setValue({name:'xiaoming', age:'20'});
```
> patchValue can only assign one of controls
```ts
formgroup.setValue({name:'xiaoming'});
```



## Reference
<div id="refer-anchor-1"></div>
- [1] [Setvalue vs Patchvalue Angular](https://sami-chkhachkhi.medium.com/setvalue-vs-patchvalue-angular-a64a55e912b8)