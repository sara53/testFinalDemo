import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL: string = 'http://localhost:3005/users';
  constructor(public client: HttpClient) {}

  getAllUsers() {
    return this.client.get(this.baseURL);
  }

  getUserById(userId: number) {
    return this.client.get(`${this.baseURL}/${userId}`);
  }

  addNewUser(user: { email: string; password: string }) {
    return this.client.post(this.baseURL, user);
  }

  editUser(userId: number, user: { email: string; password: string }) {
    return this.client.put(`${this.baseURL}/${userId}`, user);
  }

  deleteUser(userId: number) {
    return this.client.delete(`${this.baseURL}/${userId}`);
  }
}
