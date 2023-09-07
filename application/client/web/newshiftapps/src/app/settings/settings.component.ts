import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  title: String = "";

  constructor(public appService: AppService) {}

  ngOnInit(): void {
    this.setTitle("General Settings")
  }

  setTitle(title: String) {
    this.title = title;
    this.appService.title = title;
  }
}
