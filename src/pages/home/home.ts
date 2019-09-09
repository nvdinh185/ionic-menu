import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { TreeMenuPage } from '../tree-menu/tree-menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) { }

  menu(){
    this.navCtrl.push(MenuPage)
  }

  treemenu(){
    this.navCtrl.push(TreeMenuPage)
  }

  openMenu() {
    this.menuCtrl.open();
  }
}
