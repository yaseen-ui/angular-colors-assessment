import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public counter = 0;
  public changeColor(counter: number) {
    this.counter = counter;
  }
}
