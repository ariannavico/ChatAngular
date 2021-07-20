import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import {ChatRoutingModule} from './chat.routing.modules';
import { ListChatsComponent } from '../components/list-chats/list-chats.component'
import { FormsModule } from '@angular/forms';
import { AlexaComponent } from '../components/alexa/alexa.component';
import { LuciaComponent } from '../components/lucia/lucia.component';
import { LeonardoComponent } from '../components/leonardo/leonardo.component';


@NgModule({
  declarations: [
    ChatComponent,
    ListChatsComponent, 
    AlexaComponent,
    LuciaComponent,
    LeonardoComponent
    ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule
  ]
})
export class ChatModule { }
