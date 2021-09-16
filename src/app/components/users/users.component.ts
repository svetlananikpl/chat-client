import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  @Input() currentUsers: string[] | undefined;
  @Input() currentUser: string | null = '';
  @Output() onClickedUser: EventEmitter<string> = new EventEmitter();

  doubleClick(clickedUser: string) {
    this.onClickedUser.emit(clickedUser);
  }
}
