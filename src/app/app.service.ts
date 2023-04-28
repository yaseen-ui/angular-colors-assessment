import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public increment =  () => {
    let counter = 0;
    return  () => {counter += 1; return counter}
  };
}
