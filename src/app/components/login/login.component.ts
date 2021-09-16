import {Component, OnChanges, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable} from "rxjs";
import {ChatSocketService} from "../../services/chat-socket/chat-socket.service";
import {ViewService} from "../../services/view-service/view.service";
import {SessionStorageService} from "../../services/sessionStorage/session-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isAuth: Observable<boolean> | null = null;
  name = new FormControl('', [Validators.required]);
  hasCurrentUser: boolean = !!this.sessionStorageService.getCurrentUser();

  getErrorMessage() {
    return 'You must enter a value';
  }

  constructor(
    private chatSocketService: ChatSocketService,
    private authService: ViewService,
    private sessionStorageService: SessionStorageService) {
  }

  ngOnInit() {
    this.isAuth = this.authService.isAuth;
  }

  onSubmit() {
    this.chatSocketService.auth_user(this.name.value);
  }
}
