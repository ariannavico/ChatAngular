import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list-chats',
  templateUrl: './list-chats.component.html',
  styleUrls: ['./list-chats.component.scss']
})
export class ListChatsComponent implements OnInit {

  constructor() { }

  @Input() messaggioA:string = ''
  @Input() messaggioL:string = ''

  ngOnInit(): void {
  }

}
