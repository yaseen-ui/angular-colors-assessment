import { Component, EventEmitter, Input, OnInit, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit, OnChanges {
  @Output() counterValue: EventEmitter<any>;
  @Input() counter = 0;
  public incrementCounter : any;
  constructor(public appservice: AppService) {
    this.incrementCounter = this.appservice.increment(0);
    this.counterValue = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.incrementCounter = this.appservice.increment(this.counter);
  }

  public onIncrement() {
    this.counter = this.incrementCounter();
    if(this.counter > this.appservice.maxLimit) {
      this.counterValue.emit({flag: true, counter: this.counter});
    } else {
      this.counterValue.emit({flag: false, counter: this.counter});
    }
  }
}
