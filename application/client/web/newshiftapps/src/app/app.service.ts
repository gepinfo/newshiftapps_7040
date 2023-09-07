import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  currentMenu: String = 'Management';
  title: String = 'Management';
  constructor() { }
}
