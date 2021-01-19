import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Dialog from './components/Dialog.vue';
import Tabs from './components/Tabs.vue';
import Intro from './components/Intro.vue';
import Install from './components/Install.vue';
import Start from './components/Start.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: 'intro',
          component: Intro
        },
        {
          path: 'install',
          component: Install
        },
        {
          path: 'start',
          component: Start
        },
        {
          path: 'switch',
          component: SwitchDemo
        },
        {
          path: 'button',
          component: ButtonDemo
        },
        {
          path: 'dialog',
          component: DialogDemo
        },
        {
          path: 'tabs',
          component: Tabs
        },
      ]
    }
  ]
});