钉钉小程序(E应用)UI组件库
 
✍️[Young-ddui](https://li-yang-528.github.io/post/young-ddui/)是钉钉小程序(E应用)UI组件库，提供API接口主力开发者快速搭建应用。

✍️ 本项目基于 MIT 协议，请自由地享受和参与开源

<!-- more -->

# 主要功能
* 支持父子组件节点获取 - $parent/$children
* 支持页面ref获取组件对象

<!-- more -->

# 安装
```
npm i young-ddui
```

<!-- more -->
## 使用
page.json引用
```
"usingComponents": {
    "y-row":"young-ddui/es/row/index",
    "y-col": "young-ddui/es/col/index",
    "y-tabs": "young-ddui/es/tabs/index",
    "y-tab-item": "young-ddui/es/tabs/tab-item/index",
    "y-card": "young-ddui/es/card/index",
    "y-tabbar": "young-ddui/es/tabbar/index",
    "y-tabbar-item": "young-ddui/es/tabbar/tabbar-item/index",
    "y-tag": "young-ddui/es/tag/index",
    "y-timeline": "young-ddui/es/timeline/index",
    "y-timeline-item": "young-ddui/es/timeline/timeline-item/index"
  }
```

<!-- more -->

# 组件
## Button
按钮

| 参数 | 说明 | 类型 | 可选值 |默认值|
|:---- |:----|:----|:----|:----|
|className|自定义class | string|—|""|
|size|尺寸|string|mini/small/large/block|"normal"|
|type|类型|string|primary/danger/warning| "default"|
|plain|是否镂空|boolean|—|false|
|disabled|禁用|boolean|—| false|
|round|是否圆角| boolean| —|false|
|square|是否方形|boolean| —|false|
|loading| loading状态|boolean|—|false|
|onClick|click事件|function|—|
|formType|按钮类型|string|submit/reset|—|
|openType|开放能力|string| share | —|
|hoverClass|按钮按下去的样式类|string|—|—|

### Slot
| 名 称 | 说    明 
|:---- |:----|
—| 自定义内容

## Badge
徽章

| 参数 | 说明 | 类型 | 可选值 |默认值|
|:---- |:----|:----|:----|:----|
className|自定义class | string|—|""
overflowCount| 超出值显示点| number|—|99
text| 内容|string|—|—
dot|强制显示点|boolean|—|false
onClick|click事件|function|—

### Slot
| 名 称 | 说     明 
|:---- |:----|
inner| 自定义内容

## Card
卡片

| 参数 | 说明 | 类型 | 可选值 |默认值|
|:---- |:----|:----|:----|:----|
className|自定义class | string|—|""
thumb| 缩略图地址|string| —|—
title| 标题|string|—|—
subTitle|副标题|string|—|—
onClick|click事件|function|—
arrow|是否显示箭头|boolean|—|true

### Slot
| 名 称 | 说     明 
|:---- |:----|
content| 自定义内容
footer|自定义 footer

## Row
行布局

| 参数 | 说明 | 类型 | 可选值 |默认值|
|:---- |:----|:----|:----|:----|
className|自定义class | string|—|""
wrap|换行控制|string|同flex-wrap布局|"nowrap"
direction|换行排列方向|string|同flex-direction布局|"row"
align|对齐|string|同flex布局align-items|"start"
justify|对齐|string|同flex布局justify-content|"start"
alignContent|对齐|string|同flex-align-content布局|"start"

### Slot
| 名 称 | 说     明 
|:---- |:----|
—|自定义内容

## Col
列布局

### Slot
| 名 称 | 说     明 
|:---- |:----|
—|自定义内容

## Dialog
模态框

| 参数 | 说明 | 类型 | 可选值 |默认值|
|:---- |:----|:----|:----|:----|
className|自定义class | string|—|""
disableScroll|禁止滚动|boolean|—|true
visible|是否显示|boolean|—|false
title|标题|string|—|""
mask|是否显示蒙板层|boolean|—|true
showCancelButton|是否显示取消按钮|boolean|—|true
showConfirmButton|是否显示确定按钮|boolean|—|true
confirmButtonText|确认按钮文字|string|—|"确认"
cancelButtonText|取消按钮文字|string|—|"取消"
onClose|消按钮函数|function|—
onConfirm|确认按钮函数|function|—

### Slot

| 名 称 | 说     明 
|:---- |:----|
—|自定义内容
header|自定义标题
footer|自定义底部（按钮区域）
## Notify
消息提示

### Methods
| 名 称 | 说     明 | 类型| 参数
|:---- |:----|:----|:----|
show| 显示方法|object|params 

#### params

| 参数 | 说明 | 类型 | 可选值 |默认值|
|:---- |:----|:----|:----|:----|
text|内容 | string|""|""
duration|关闭时长 | number|—|3000
type|类型 | string|"success","error,"warning"|""


## Tabbar
底部菜单栏

| 参数 | 说明 | 类型 | 可选值 |默认值|
|:---- |:----|:----|:----|:----|
className|自定义class | string|—|""
active|激活状态|number|tabbar个数|-1
onChange|tabbar切换回调函数| function|—|—

### Slot
| 名 称 | 说     明 
|:---- |:----|
—|自定义内容

## Tabbar-item
底部菜单栏-内容

| 参数 | 说明 | 类型 | 可选值 |默认值|
|:---- |:----|:----|:----|:----|
className|自定义class | string|—|""
icon|图标|string|—|""
path|路由| string|—|""

### Slot

| 名 称 | 说     明 
|:---- |:----|
—|自定义内容
icon|自定义图标
icon-active| 激活状态下图标

## Tabs
选项卡

| 参数 | 说明 | 类型 | 可选值 |默认值|
|:---- |:----|:----|:----|:----|
className|自定义class | string|—|""
onTabChang|监听tabs切换函数|function|—|""

### Slot
| 名 称 | 说     明 
|:---- |:----|
—|自定义内容

## Tabs-item
选项卡-内容

| 参数 | 说明 | 类型 | 可选值 |默认值|
|:---- |:----|:----|:----|:----|
className|自定义class | string|—|""

### Slot
| 名 称 | 说     明 
|:---- |:----|
—|自定义内容

## Tag
标签

| 参数 | 说明 | 类型 | 可选值 |默认值|
|:---- |:----|:----|:----|:----|
className|自定义class | string|—|""
size|尺寸 | string|"large"/"medium"|"medium"
mark|是否为标记样式 | boolean|—|true
round|圆角 | boolean|—|true
type|类型 | boolean|"success"/"error"/"warining"|"info"

### Slot
| 名 称 | 说     明 
|:---- |:----|
—|自定义内容

## Toast
轻提示

### Methods
| 名 称 | 说     明 | 类型| 参数
|:---- |:----|:----|:----|
show| 显示方法|object| params

#### params

| 参数 | 说明 | 类型 | 可选值 |默认值|
|:---- |:----|:----|:----|:----|
text|内容 | string|""|""
icon|图标 | string|—|""
duration|关闭时长 | number|—|3000
size|icon图标大小 | number|—|50


