import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  constructor(public appService: AppService){
  }

  setCurrentMenu(menuName: String) {
    this.appService.currentMenu = menuName;
    this.appService.title = menuName;
  }
}
