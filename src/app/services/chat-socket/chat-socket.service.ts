import {Injectable} from '@angular/core';
import {Socket} from "ngx-socket-io";
import {tap} from "rxjs/operators";
import {Message} from "../../models/Message";
import {SessionStorageService} from "../sessionStorage/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ChatSocketService {
  currentUser: string = '';

  users = this.socket.fromEvent<string[]>('users')
    .pipe(
      tap(users => {
        if (users.length) {
          this.sessionStorageService.setCurrentUser(this.currentUser);
        }
      }));
  message = this.socket.fromEvent<Message>('new_message');

  constructor(
    private socket: Socket,
    private sessionStorageService: SessionStorageService) {
  }

  auth_user(username: string) {
    this.currentUser = username;
    this.socket.emit('auth_user', username);
  }

  addMessage(message: string) {
    this.socket.emit('add_message', message);
  }

}
