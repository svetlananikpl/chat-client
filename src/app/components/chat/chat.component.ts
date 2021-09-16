import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Message} from "../../models/Message";
import {ChatSocketService} from "../../services/chat-socket/chat-socket.service";
import {SessionStorageService} from "../../services/sessionStorage/session-storage.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  isAuth: boolean = false;
  usersSub: Subscription | undefined;
  messagesSub: Subscription | undefined;
  messages: Message[] = [];
  currentUser: string | null = this.sessionStorageService.getCurrentUser();
  currentUsers: string[] = [];
  checkedUser: string = '';

  constructor(
    private chatSocketService: ChatSocketService,
    private sessionStorageService: SessionStorageService) {
  }

  ngOnInit(): void {
    if (this.currentUser) {
      this.chatSocketService.auth_user(this.currentUser);
    }
    this.usersSub = this.chatSocketService.users.subscribe(users => {
        this.isAuth = !!users.length;
        this.currentUsers = users;
        if (!this.currentUser) {
          this.currentUser = this.sessionStorageService.getCurrentUser();
        }
      }
    );
    this.messagesSub = this.chatSocketService.message.subscribe(message => this.messages.push(message));
  }

  ngOnDestroy() {
    // @ts-ignore
    this.usersSub.unsubscribe();
    // @ts-ignore
    this.messagesSub.unsubscribe();
  }

  addUserToMessage(clickedUser: string) {
    this.checkedUser = '@' + clickedUser;
  }

  addMessage(message: string) {
    this.chatSocketService.addMessage(message);
  }

}
