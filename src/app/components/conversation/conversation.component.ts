import {Component, Input} from '@angular/core';
import {Message} from "../../models/Message";

const PRIMARYCOLOR: string = "#f7f7f7";

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent {
  @Input() messages: Message[] = [];

  getColor(i: number): string {
    return i % 2 ? PRIMARYCOLOR : ""
  }

  trackByFn(index: number, message: Message) {
    return message.time;
  }
}
