import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  public maxLimitReached = false;
  public counter = 0;
  public changeColor(event: any) {
    this.counter = event.counter;
    this.maxLimitReached = event.flag;
  }
}
