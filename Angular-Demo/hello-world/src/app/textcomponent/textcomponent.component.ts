import { Component } from '@angular/core';

@Component({
  selector: 'app-textcomponent',
  templateUrl: './textcomponent.component.html',
  styleUrls: ['./textcomponent.component.css']
})
export class TextcomponentComponent {
  public name = "pranav"

  public value = ""

  onClick() {
    alert("this is onclick event")
  }
}
