import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../model/user';
import { data } from 'jquery';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private userservice: UserService) {}

  users?: User[];
  currentUser: User = {
    name: '',
    age: '',
  };
  currentIndex = -1;
  name = '';

  ngOnInit(): void {
    this.retrieveUser();
  }

  retrieveUser(): void {
    this.userservice.getUserList().subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);
      },
      error: (e) => console.log(e),
    });
  }

  refreshList(): void {
    this.retrieveUser();
    this.currentUser = {
      name: '',
      age: '',
    };
    this.currentIndex = -1;
  }

  setActiveUser(user: User, index: any): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllUser(): void {
    this.userservice.deleteAllUser().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.log(e),
    });
  }

  getByName1(): void {
    this.currentUser = {
      name: '',
      age: '',
    };
    this.currentIndex = -1;

    this.userservice.getByName(this.name).subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);
      },
      error: (e) => console.log(e),
    });
  }
}
