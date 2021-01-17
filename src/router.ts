import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Button from './components/Button.vue';
import Dialog from './components/Dialog.vue';
import Tabs from './components/Tabs.vue';
import Intro from './components/Intro.vue';
import Install from './components/Install.vue';
import Start from './components/Start.vue';
import SwitchDemo from './components/SwitchDemo.vue';

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
          path: 'switchDemo',
          component: SwitchDemo
        },
        {
          path: 'button',
          component: Button
        },
        {
          path: 'dialog',
          component: Dialog
        },
        {
          path: 'tabs',
          component: Tabs
        },
      ]
    }
  ]
});