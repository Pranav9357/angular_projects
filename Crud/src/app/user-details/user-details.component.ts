import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() viewMode : any;

  @Input() currentUser: User = {
    name: '',
    age: '',
  };

  message = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getUser(this.route.snapshot.params['id']);
    }
  }

  getUser(id: string): void {
    this.userService.getUser(id).subscribe({
      next: (data) => {
        this.currentUser = data;
        console.log(data);
      },
      error: (e) => console.log(e),
    });
  }

  updateUser(): void {
    this.message = '';

    this.userService
      .updateUser(this.currentUser.id, this.currentUser)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.log(e),
      });
  }

  deleteUser(): void {
    this.userService.deleteUser(this.currentUser.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/view-page']);
      },
      error: (e) => console.log(e),
    });
  }
}
