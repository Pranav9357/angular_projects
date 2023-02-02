import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './Components/dialog/dialog.component';
import { AccountService } from './Services/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from './Model/account';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'paymentCQRS';

}