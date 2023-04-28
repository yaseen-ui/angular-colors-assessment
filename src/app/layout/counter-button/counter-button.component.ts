import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {
  @Output() counterValue: EventEmitter<any>;
  public incrementCounter : any;
  public counter = 0;
  constructor(public appservice: AppService) {
    this.incrementCounter = this.appservice.increment();
    this.counterValue = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  public onIncrement() {
    console.log('arey')
    this.counter = this.incrementCounter();
    this.counterValue.emit(this.counter)
  }
}
