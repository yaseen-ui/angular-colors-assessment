import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public maxLimit = 9;

  public increment =  (counterValue: number) => {
    let counter = counterValue;
    return  () => {
      counter += 1;
      return counter}
  };
}
