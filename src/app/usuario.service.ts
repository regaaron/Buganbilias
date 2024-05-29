import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private userSource = new BehaviorSubject<string>(localStorage.getItem('currentUser') || '');
  currentUser = this.userSource.asObservable();
  constructor() { }

 
  changeUser(user: string) {
    localStorage.setItem('currentUser', user);
    this.userSource.next(user);
  }

  clearUser() {
    localStorage.removeItem('currentUser');
    this.userSource.next('');
  }
}
