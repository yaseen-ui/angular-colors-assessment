import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  public counter = 0;
  public changeColor(counter: number) {
    this.counter = counter;
  }
}
