import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    //animations triggers go here
    trigger(
      'openCloseSideMenu', [
        state('closed', style({
          width: '0px',
        })),
        state('open', style({
          width: '200px'
        })),
        transition('open => closed', [animate('0.2s')]),
        transition('closed => open', [animate('0.2s')])
      ]
    )
  ]
})
export class AppComponent {

  sideMenuOpen = false;

  closeSideMenu(){
    this.sideMenuOpen = false;
  }

  openSideMenu(){
    this.sideMenuOpen = true;
  }
}
