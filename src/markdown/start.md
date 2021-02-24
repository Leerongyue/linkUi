# 下载与使用
## # 引入 link-ui
#### 完整引入

    import 'link-ui/dist/lib/link.css'
    import { createApp } from 'vue'
    import App from './App.vue'
    import { linkUI } from 'link-ui'

    createApp(App)
      .use(linkUI)
      .mount('#app')
>     
> 以上代码便完成了 link-ui 的引入。需要注意的是，样式文件需要单独引入。
>
#### 按需引入

>如果你只希望引入部分组件，比如 Button ，那么需要在 main.js 中写入以下内容：

    import 'link-ui/dist/lib/link.css'
    import { createApp } from 'vue'
    import { Button } from 'link-ui'
    import App from './App.vue'

    createApp(App).use(Button).mount('#app')
>完整组件列表和引入方式

    import App from './App.vue'
    import { createApp } from 'vue'
    import {
        Button,
        Switch,
        Dialog,
        Tabs,
    } from 'link-ui'

    createApp(App)
        .component('Button',Button)
        .component('Switch',Switch)
        .component('Dialog',Dialog)
        .component('TabBox',TabBox)
        .component('Tabs',Tabs)
        
上一节：[安装](#/doc/install)