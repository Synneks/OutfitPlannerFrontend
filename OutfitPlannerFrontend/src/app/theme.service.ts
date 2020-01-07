import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';

interface Theme {
  name: string;
  styles: ThemeStyle[];
}

interface ThemeStyle {
  themeVariable: string;
  value: string;
}

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themes: Theme[] = [];
  public currentTheme = 0;

  constructor(private domCtrl: DomController, @Inject(DOCUMENT) private document) {
    this.themes = [
      {
        name: 'day',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#3880ff'},
          { themeVariable: '--ion-background-color', value: '#ffffff'},
          { themeVariable: '--whiteColor', value: '#ffffff'},
          { themeVariable: '--darkToLight', value: '#222222'},
          { themeVariable: '--lightToDark', value: '#ffffff'},
          { themeVariable: '--grey', value: '#eeeeee'},
          { themeVariable: '--ion-toolbar-background', value: '#ffffff'},//bun
          { themeVariable: '--ion-toolbar-color', value: '#000000'},//bun
          { themeVariable: '--ion-item-color', value: '#000000'}, //bun

        ]
      },
      {
        name: 'night',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#6a0dad'}, //bun
          { themeVariable: '--ion-color-primary-rgb', value: '#6a0dad'}, //bun
          { themeVariable: '--ion-color-primary-contrast', value: '#ffffff'},
          { themeVariable: '--ion-color-primary-contrast-rgb', value: '#0000FF'},
          { themeVariable: '--ion-color-primary-shade', value: '#1e2023'},
          { themeVariable: '--ion-color-primary-tint', value: '#0000FF'},
          { themeVariable: '--ion-item-ios-background-color', value: '#0000FF'},
          { themeVariable: '--ion-item-background-color', value: '#0000FF'},
          { themeVariable: '--ion-tabbar-background-color', value: '#0000FF'},
          { themeVariable: '--ion-tabbar-ios-text-color-active', value: '#ffffff'},
          { themeVariable: '--ion-header-color', value: '#222222'},//bun
          { themeVariable: '--ion-toolbar-background', value: '#000000'},//bun
          { themeVariable: '--ion-toolbar-color', value: '#ffffff'},//bun
          { themeVariable: '--ion-item-color', value: '#ffffff'}, //bun
          { themeVariable: '--ion-background-color', value: '#222222'}, //bun

          { themeVariable: '--darkToLight', value: '#ffffff'},
          { themeVariable: '--lightToDark', value: '#222222'},
          { themeVariable: '--grey', value: '#0000FF'},

        ]
      }
    ]
  }

  setTheme(name): void {
    let theme = this.themes.find(theme => theme.name === name);
    this.domCtrl.write(() => {
      theme.styles.forEach(style => {
        document.documentElement.style.setProperty(style.themeVariable, style.value);
      });

    });

  }
}

