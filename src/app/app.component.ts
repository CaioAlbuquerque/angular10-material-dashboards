import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular10-material-dashboards';
  
  sideBarOpened = false;

  sideBarToggler(){
    this.sideBarOpened = !this.sideBarOpened;
  }
}