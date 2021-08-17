# Angular

## 命令行快速生成
```powershell
// 生成项目
ng new <项目英文名>

// 安装ng-zorro
ng add ng-zorro-antd

// 生成模块
ng generate module <路径及模块名称>
// 缩写,在app文件夹下生成路径为pages/setup的setup.module.ts文件
ng g m pages/setup

//生成组件
ng generage component <路径及组件名称>
// 缩写, 在app文件夹下生成路径为pages/setup的组件的模板、样式、测试文件、ts文件四个文件
ng g c pages/setup

// 生成服务
ng generage service <路径及服务文件名称>
// 缩写
ng g s services/local-storage

// 启动服务
ng serve 
或
npm start 
```

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