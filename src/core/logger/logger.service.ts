import { Injectable } from '@angular/core';

@Injectable({
  // Declare that this service should be created
  // by the root application injector
  providedIn: 'root'
})
export class LoggerService {
  log( msg: string) {
      console.log(msg);
  }
  error(msg) {
  console.error(msg);
  }
  constructor() { }
}
