import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public maxLimitReached = false;
  public counter = 0;
  public changeColor(event: any) {
    this.counter = event.counter;
    this.maxLimitReached = event.flag;
  }
}
