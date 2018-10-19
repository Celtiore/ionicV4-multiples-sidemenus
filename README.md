# Multiples SideMenu - Ionic V4

#   Update 19.10.2018

#   
    -   move all ion-menu in app.component.html
    -   add in all pages : ionViewDidLeave() {    this.menuCtrl.enable(false, 'MenuXXXXX')  }

    -   Seems to works perfectly

#   Ionic:
    -   ionic (Ionic CLI)             : 4.2.1 (/usr/local/lib/node_modules/ionic)
    -   Ionic Framework               : @ionic/angular 4.0.0-beta.13
    -   @angular-devkit/build-angular : 0.8.5
    -   @angular-devkit/schematics    : 0.8.5
    -   @angular/cli                  : 6.2.5
    -   @ionic/angular-toolkit        : 1.0.0

#   Cordova:
    -   cordova (Cordova CLI) : 8.1.2 (cordova-lib@8.1.1)
    -   Cordova Platforms     : not available
    -   Cordova Plugins       : not available

#   System:
    -   Android SDK Tools : 26.1.1 (/Volumes/Données/Android)
    -   NodeJS            : v8.12.0 (/usr/local/bin/node)
    -   npm               : 6.4.1
    -   OS                : macOS
    -   Xcode             : Xcode 10.0 Build version 10A255

# "dependencies":
    -   "@angular/common": "~6.1.1",
    -   "@angular/core": "~6.1.1",
    -   "@angular/forms": "~6.1.1",
    -   "@angular/http": "~6.1.1",
    -   "@angular/platform-browser": "~6.1.1",
    -   "@angular/platform-browser-dynamic": "~6.1.1",
    -   "@angular/router": "~6.1.1",
    -   "@ionic-native/core": "5.0.0-beta.21",
    -   "@ionic-native/splash-screen": "5.0.0-beta.21",
    -   "@ionic-native/status-bar": "5.0.0-beta.21",
    -   "@ionic/angular": "4.0.0-beta.13",
    -   "core-js": "^2.5.3",
    -   "rxjs": "6.2.2",
    -   "zone.js": "^0.8.26"
  
  #  app.component.html :

    -   <ion-menu side="start" menu-id="Menu1"> <- to use in Page Menu1.html
  
    -   <ion-menu side="start" menu-id="Menu2"> <- to use in Page Menu2.html

  # home.html :

    -   <ion-menu side="start" menu-id="Menu3"> <-    to use in home.html

  # list.html :

    -   <ion-menu side="end" menu-id="Menu4"> <-    to use in home.html

# Usage :
    -   app-routing-module.ts :
        -   const routes: Routes = [    { path: '', redirectTo: 'home', pathMatch: 'full' }
        -   or
                                        { path: '', redirectTo: 'menu1', pathMatch: 'full' },

# home.page.ts :
    -   ionViewWillEnter() { this.menuCtrl.enable(true, 'Menu3') }

# list.page.ts :
    -   ionViewWillEnter() { this.menuCtrl.enable(true, 'Menu4') }

# menu1.page.ts :
    -   ionViewWillEnter() { this.menuCtrl.enable(true, 'Menu1') }

# menu2.page.ts :
    -   ionViewWillEnter() { this.menuCtrl.enable(true, 'Menu2') }