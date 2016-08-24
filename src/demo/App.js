import { Component } from '@angular/core';

import { Drawer } from '../components/drawer/Drawer.js';

import template from './app.html';
import './app.scss';

@Component({
  selector: 'app',
  template
})
export class App {

  version = APP_VERSION;

  colors = [
    'blue',
    'light-blue',
    'green',
    'red',
    'orange'
  ];

  constructor(drawer: Drawer) {
    this.drawer = drawer;
  }

  setTheme(theme) {
    const elm = document.querySelector('body');

    // remove old
    elm.classList.remove('light-theme');
    elm.classList.remove('dark-theme');
    elm.classList.remove('gradient-theme');

    // add new
    elm.classList.add(`${theme}-theme`);
  }

  openDrawer() {
    drawer.open();
  }

}
