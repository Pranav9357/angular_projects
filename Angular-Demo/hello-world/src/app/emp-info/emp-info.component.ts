import { Component } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers : [RecordsService]
})
export class EmpInfoComponent {

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

  constructor (private dservice: RecordsService) {}
}
