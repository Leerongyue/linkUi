import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import {h} from "vue";
import Markdown from "./components/Markdown.vue";
import install from "./markdown/install.md";
import intro from "./markdown/intro.md";
import start from "./markdown/start.md";
import IconDemo from "./components/IconDemo.vue";


const md = string => h(Markdown, {content: string, key: string});

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/doc",
      component: Doc,
      children: [
        {
          path: "intro",
          component: md(intro)
        },
        {
          path: "install",
          component: md(install)
        },
        {
          path: "start",
          component: md(start)
        },
        {
          path: "switch",
          component: SwitchDemo
        },
        {
          path: "button",
          component: ButtonDemo
        },
        {
          path: "dialog",
          component: DialogDemo
        },
        {
          path: "tabs",
          component: TabsDemo
        },
        {
          path: "icon",
          component: IconDemo
        },
      ]
    }
  ]
});