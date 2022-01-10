# 项目必读

> Taro create --name [页面名称] 
>> 能够在当前项目的pages目录下快速生成新的页面文件，并填充基础代码，是一个提高开发效率的利器

<br />

> /*postcss-pxtransform disable*/
>> 对于头部包含注释 /*postcss-pxtransform disable*/ 的文件，CSS 编译时插件不予处理。

<br />

> 忽略样式方法 1 加入 CSS 注释强制声明忽略下一行
>> ```
>>    /* autoprefixer: ignore next */
>>  -webkit-box-orient: vertical;
>> ```

<br />

>> 忽略样式方法 2 加入 CSS 注释强制声明注释中间多行
>> ```
>>  /* autoprefixer: off */
>>   -webkit-box-orient: vertical;
>>  /* autoprefixer: on */
>> ```

<br />

> 忽略样式方法 3 写成行内样式
