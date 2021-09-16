import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  setCurrentUser(user: string) {
    sessionStorage.setItem('currentUser', user);
  }

  getCurrentUser():string | null {
    return sessionStorage.getItem('currentUser');
  }
}
