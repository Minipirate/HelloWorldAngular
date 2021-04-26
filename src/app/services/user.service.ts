import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:3000/user/'

  constructor(private http: HttpClient) { }

  get(page: number, limit: number, query: string) {
    return this.http.get<User[]>(this.url + '?_page=' + page + '&limit=' + limit + query, { observe: 'response' })
  }

  create(user: User) {
    return this.http.post(this.url, user)
  }

  findByEmail(email: any){
    return this.http.get<User[]>(this.url + '?email=' + email)
  }

  findById(id : number){
    return this.http.get<User> (this.url + id)
  }

  update(user: User) {
    return this.http.put(this.url + user.id, user)
  }

  delete(id : number) {
    return this.http.delete(this.url + id)
  }
}