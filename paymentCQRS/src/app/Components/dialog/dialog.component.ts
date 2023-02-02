import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Account } from 'src/app/Model/account';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  accountForm!: FormGroup;
  account: Account = new Account()
  

  constructor(
    private formBulider: FormBuilder,
    private accountService: AccountService,
    private dialofRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.accountForm = this.formBulider.group({
      accountNumber: ['', Validators.required],
      balance: ['', Validators.required],
      bankName: ['', Validators.required],
      accountType: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  addAccount() {

    this.account.accountNumber = this.accountForm.value.accountNumber
    this.account.balance = this.accountForm.value.balance
    this.account.bankName = this.accountForm.value.bankName
    this.account.accountType = this.accountForm.value.accountType
    this.account.status = this.accountForm.value.status

    this.accountService.createAcoount(this.account).subscribe({
      next: (res) => {
        alert(res.message);
        this.accountForm.reset();
        this.dialofRef.close('save');
        const ref = document.getElementById('button')
        ref?.click()
        window.location.reload()
      },
      error: (res) => {
        alert(res.message);
      },
    });
  }

  onEdit(row: any) {
    this.account.accountID = row.accountID
    this.accountForm.controls['accountNumber'].setValue(row.accountNumber)
    this.accountForm.controls['balance'].setValue(row.balance)
    this.accountForm.controls['bankName'].setValue(row.bankName)
    this.accountForm.controls['accountType'].setValue(row.accountType)
    this.accountForm.controls['status'].setValue(row.status)
  }

  updateAccount() {
    this.account.accountNumber = this.accountForm.value.accountNumber
    this.account.balance = this.accountForm.value.balance
    this.account.bankName = this.accountForm.value.bankName
    this.account.accountType = this.accountForm.value.accountType
    this.account.status = this.accountForm.value.status

    this.accountService.updateAccount(this.account.accountID, this.account)
    .subscribe({
      next: (res) => {
        alert(res.message)
        this.accountForm.reset();
        this.dialofRef.close('save');
        const ref = document.getElementById('button')
        ref?.click()
        window.location.reload()
      }
    })
  } 
}
