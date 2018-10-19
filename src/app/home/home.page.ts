import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'List', url: '/list', icon: 'list' },
    { title: 'Menu 1', url: '/menu1', icon: 'list' },
    { title: 'Menu 2', url: '/menu2', icon: 'list' },

  ];
  constructor(public menuCtrl: MenuController) {
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'Menu3')
    console.log('Home');
    this.menuCtrl.getMenus().then(res => {
      console.log(res);
    })
  }
  ionViewDidLeave() {
    this.menuCtrl.enable(false, 'Menu3')
  }


}
