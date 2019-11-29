import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `<div>
                    <button value="Registration" routerLink="/registration" routerLinkActive="active"></button>
                    <button value="login"  routerLink="/login" routerLinkActive="active"></button>
                </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskmsr';
}
