import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage, PageOne, PageTwo, PageThree } from '../pages/menu/menu';
import { TreeMenuPage } from '../pages/tree-menu/tree-menu';
import { TreeView } from '../components/tree-view/tree-view';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    PageOne,
    PageTwo,
    PageThree,
    TreeMenuPage,
    TreeView
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    PageOne,
    PageTwo,
    PageThree,
    TreeMenuPage,
    TreeView
  ],
  providers: []
})
export class AppModule { }
