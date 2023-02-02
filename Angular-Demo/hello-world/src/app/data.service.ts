import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1 : string[] = ["pranav vichare", "E15", "pv@gmail.com"]
  
  info2 : string[] = ["jeet patel", "E16", "jp@gmail.com"]

  info3 : string[] = ["amin tai", "E17", "at@gmail.com"]

  getInfo1() : string[] {
    return this.info1
  }
  getInfo2() : string[] {
    return this.info2
  }
  getInfo3() : string[] {
    return this.info3
  }

  addInfo(info: any) {
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }

  constructor() { }
}
