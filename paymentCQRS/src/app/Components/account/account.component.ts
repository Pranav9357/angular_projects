import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Account } from 'src/app/Model/account';
import { AccountService } from 'src/app/Services/account.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent{
  
  
  constructor(private dialog: MatDialog) {}
  

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    });
  }

  
}
