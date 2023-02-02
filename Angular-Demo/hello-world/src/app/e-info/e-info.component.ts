import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers: [DataService]
})
export class EInfoComponent {

  infoReceive1 : string[] = []
  infoReceive2 : string[] = []
  infoReceive3 : string[] = []

  getInfoReceive1() {
    this.infoReceive1  = this.dservice.getInfo1()
  }
  getInfoReceive2() {
    this.infoReceive2 = this.dservice.getInfo2()
  }
  getInfoReceive3() {
    this.infoReceive3 = this.dservice.getInfo3()
  }

  constructor (private dservice: DataService) {}

  updateInfo(frm: any) {
    this.dservice.addInfo(frm.value.location)
  }
}
