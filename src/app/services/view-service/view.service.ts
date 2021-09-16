import {Injectable} from '@angular/core';
import {ChatSocketService} from "../chat-socket/chat-socket.service";
import {map} from "rxjs/operators";
import {SessionStorageService} from "../sessionStorage/session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  isAuth = this.chatSocketService.users.pipe(map(users => !!users.length));

  constructor(private chatSocketService: ChatSocketService) {
  }

}
