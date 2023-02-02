import { Component} from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private userservice : UserService) {}

  user : User = {
    name : '',
    age: ''
  }

  saveUser(): void  {
    const data = {
      name : this.user.name,
      age : this.user.age
    }

    this.userservice.createUser(data)
    .subscribe({
      next : (res) => {
        console.log(res)
      },
      error : (e) => console.log(e)
    })
  }

  newUser(): void {
    this.user = {
      name : '',
      age : ''
    }
  }
}
