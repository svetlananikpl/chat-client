import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnChanges {
  @Input() checkedUser: string = '';
  @Output() onSubmitMessage: EventEmitter<string> = new EventEmitter();
  message = new FormControl('');

  ngOnChanges(changes: SimpleChanges) {
    const previousValue = changes.checkedUser.previousValue;
    const currentValue = changes.checkedUser.currentValue;
    if (currentValue && previousValue !== currentValue) {
      const newMessage = currentValue + ' ' + this.message.value;
      this.message.setValue(newMessage);
    }
  }

  onSubmit() {
    this.onSubmitMessage.emit(this.message.value);
    this.message.setValue('');
  }

}
