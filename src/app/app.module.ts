import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';

import {AppComponent} from './app.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {LoginComponent} from './components/login/login.component';
import {ChatComponent} from './components/chat/chat.component';
import {UsersComponent} from './components/users/users.component';
import {MessageComponent} from './components/message/message.component';
import {ConversationComponent} from './components/conversation/conversation.component';
import {MatCardModule} from "@angular/material/card";

const config: SocketIoConfig = {url: 'ws://localhost:4444', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    ChatComponent,
    UsersComponent,
    MessageComponent,
    ConversationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
