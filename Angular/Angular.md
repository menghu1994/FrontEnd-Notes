# Angular

![Angular running track](https://www.runoob.com/wp-content/uploads/2016/09/overview2.png)

## 组件
 - 处理数据和功能的组件类 .ts
  + @Component({
  	selector:'',  //选择器,标识组件
  	templateUrl:'', //模板
  	styleUrls:[] //样式
  })
 - 决定UI的HTML模板 .html
 - 定义外观的组件专属样式 .css

 组件必须声明在一个`NgModule`中

## 语法
 - 判断 *ngIf   *ngIf="can; else cannot"
 - 循环 *ngFor  *ngFor="let item of items; index as i"
 - 绑定属性 [title] [style.color]
 - 绑定方法 (click)

### 父子组件传值(单向)
 - 父 => 子 
    子组件添加输入属性 @Input()  導入Input符號，添加@Input()装饰器
    父组件内组件中绑定属性和属性值
 - 子 => 父 
    EventEmitter

### 数据双向绑定
// 添加模块FromsModule才能使用
[(ngModel)]

### 属性绑定
  class绑定 [class.selected]="hero == selectedHero"
  [hero]="selectedHero"

## Services 
 - 导入Injectable符号,并添加@Injectable()装饰器


## Observable