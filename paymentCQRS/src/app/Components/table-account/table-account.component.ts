import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/Model/account';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-table-account',
  templateUrl: './table-account.component.html',
  styleUrls: ['./table-account.component.css']
})
export class TableAccountComponent {

  accountData!: any

  accountForm!: FormGroup;
  account: Account = new Account()

  constructor(
    private formBulider: FormBuilder,
    private accountService: AccountService,
  ) {}

  ngOnInit(): void {
    this.accountForm = this.formBulider.group({
      accountNumber: ['', Validators.required],
      balance: ['', Validators.required],
      bankName: ['', Validators.required],
      accountType: ['', Validators.required],
      status: ['', Validators.required],
    });
    this.getAllAccount()
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
        const ref = document.getElementById('button')
        ref?.click()
        this.getAllAccount()
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
        const ref = document.getElementById('button')
        ref?.click()
        this.getAllAccount()
      }
    })
  }

  getAllAccount() {
    this.accountService.getAllAccount().subscribe({
      next: (res) => {
        this.accountData = res
      },
      error: (res) => {
        alert(res.messgae);
      },
    });
  }


  deleteAccount(row: any) {
    this.accountService.deleteAccount(row.accountID)
    .subscribe({
      next: (res) => {
        alert(res.message)
        this.getAllAccount();
      },
      error: (res) => {
        alert(res.message)
      }
    })
  }
}