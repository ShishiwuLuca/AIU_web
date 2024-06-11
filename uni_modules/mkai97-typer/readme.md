# mkai97-typer
1. step: 一次显示多少字符
2. content: 要显示的内容
3. speed: 显示速度
4. isRich: 是否以富文本显示(如非必要不要用,耗时解析成对的标签,不成对的时候不影响使用但是会报错)

```
<!-- template内使用组件 -->
<typer  :speed="1" :step="2" :content="content"></typer>

<!-- 引入组件 -->
import typer from "@/uni_modules/mkai97-typer/components/mkai97-typer/mkai97-typer.vue" 
...
<!-- 注册组件 -->
components: {
	typer
	},
...
```
### 效果图
![效果图](https://cdn-1304584475.cos.ap-beijing.myqcloud.com/uPic/2023-03-21-15-03-55.309_1679379041.gif)
