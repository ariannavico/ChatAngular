import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-alexa',
  templateUrl: './alexa.component.html',
  styleUrls: ['./alexa.component.scss']
})
export class AlexaComponent implements OnInit {


  
  message: string = '';
  name: string = '';
  answering: boolean = false;
  alexaMsg: string = '';
  loadLucia = 'ciao mi chiamo Alexa, tu come ti chiami ?';
  showButtons: boolean = false;
  meteo: string = 'Nuvoloso';
  buttonMeteo: boolean = true;
  buttonDates: boolean = true;
  buttonNews: boolean = true;
  dates: string = 'Dentista ore 15:00';
  news: string = 'Coronavirus Italia, il bollettino di oggi 23 maggio: 3.995 nuovi casi e 72 vittime'

  @ViewChild('chatContainer') chatContainer!: ElementRef;

  ngOnInit(): void {
    this.loadCiao()
  }

  loadCiao() {
    this.answering = true
    setTimeout(() => {
      this.answering = false;
      this.alexaMsg = this.loadLucia;
    }, 1000)
  }
  sendMsg() {
    this.name = this.message;
    this.message = '';
    this.chatContainer.nativeElement.innerHTML += `<p class="tr">  ${this.name} </p>`;
    setTimeout(() => {
      this.answering = true;
      setTimeout(() => {
        this.chatContainer.nativeElement.innerHTML += `<p>ciao ${this.name}, cosa posso fare per te ? </p>`
        this.answering = false;
        setTimeout(() => {
          this.showButtons = true
        })
      }, 1000)
    }, 500)
  }


  showMeteo() {
    this.showButtons = false
    this.buttonMeteo = false
    setTimeout(() => {
      this.answering = true;
      setTimeout(() => {
        this.chatContainer.nativeElement.innerHTML += `<p>Il meteo di oggi è ${this.meteo}</p>`
        this.answering = false;
        setTimeout(() => {
          if (this.buttonDates || this.buttonNews) {
            this.answering = true;
          }
          setTimeout(() => {
            if (this.buttonDates || this.buttonNews) {
              this.chatContainer.nativeElement.innerHTML += `<p>Posso fare altro per te ?</p>`
              this.answering = false;
              this.showButtons = true
            }
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }
  showDates() {
    this.showButtons = false
    this.buttonDates = false
    setTimeout(() => {
      this.answering = true;
      setTimeout(() => {
        this.chatContainer.nativeElement.innerHTML += `<p>I tuoi appuntamenti per oggi sono: ${this.dates}</p>`
        this.answering = false;
        setTimeout(() => {
          if (this.buttonMeteo || this.buttonNews) {
            this.answering = true;
          }
          setTimeout(() => {
            if (this.buttonMeteo || this.buttonNews) {
              this.chatContainer.nativeElement.innerHTML += `<p>Posso fare altro per te ?</p>`
              this.answering = false;
              this.showButtons = true
            }

          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }


  showNews() {
    this.showButtons = false
    this.buttonNews = false
    setTimeout(() => {
      this.answering = true;
      setTimeout(() => {
        this.chatContainer.nativeElement.innerHTML += `<p>Le news di oggi sono: ${this.news}</p>`
        this.answering = false;
        setTimeout(() => {
          if (this.buttonMeteo || this.buttonNews) {
            this.answering = true;
          }
          setTimeout(() => {
            if (this.buttonMeteo || this.buttonDates) {
              this.chatContainer.nativeElement.innerHTML += `<p>Posso fare altro per te ?</p>`
              this.answering = false;
              this.showButtons = true
            }

          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }


}