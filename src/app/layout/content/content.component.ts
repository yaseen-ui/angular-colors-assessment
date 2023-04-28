import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  public maxLimitReached = false;
  public counter = 0;
  public changeColor(event: any) {
    this.counter = event.counter;
    this.maxLimitReached = event.flag;
  }
}
