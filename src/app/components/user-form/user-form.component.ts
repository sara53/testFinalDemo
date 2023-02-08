import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  constructor(public router: Router) {}
  back() {
    this.router.navigate(['/']);
  }
}
