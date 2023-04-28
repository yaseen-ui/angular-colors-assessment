import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public maxLimitReached = false;
  public counter = 0;
  public changeColor(event: any) {
    this.counter = event.counter;
    this.maxLimitReached = event.flag;
  }
}
