import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.page.html',
  styleUrls: ['./menu1.page.scss'],
})
export class Menu1Page implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'List', url: '/list', icon: 'list' },
    { title: 'Menu 1', url: '/menu1', icon: 'list' },
    { title: 'Menu 2', url: '/menu2', icon: 'list' }

  ];
  constructor(public menuCtrl: MenuController) { }

  ngOnInit() { }
  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'Menu1');
    console.log('Menu 1');
    this.menuCtrl.getMenus().then(res => {
      console.log(res);
    })
  }
  ionViewDidLeave() {
    this.menuCtrl.enable(false, 'Menu1')
  }
}
