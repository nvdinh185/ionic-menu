import { Component, ViewChild } from '@angular/core';

import { HomePage } from '../pages/home/home';

import { Nav } from 'ionic-angular';
import { MenuPage, PageOne, PageTwo, PageThree } from '../pages/menu/menu';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  constructor() { }

  openPage(PageName) {

    if (PageName == 'MenuPage') {
      this.nav.setRoot(MenuPage);
    } else if (PageName == 'PageOne') {
      this.nav.setRoot(PageOne);
    } else if (PageName == 'PageTwo') {
      this.nav.setRoot(PageTwo);
    } else {
      this.nav.setRoot(PageThree);
    }
  }

}

