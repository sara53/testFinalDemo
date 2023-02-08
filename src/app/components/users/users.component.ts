import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: { id: number; email: string; password: string }[] = [];
  constructor(public userServices: UserService) {}
  ngOnInit(): void {
    this.userServices.getAllUsers().subscribe((response) => {
      console.log(typeof response);
      this.users = response as {
        id: number;
        email: string;
        password: string;
      }[];
    });
  }
}
