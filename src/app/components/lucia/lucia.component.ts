import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lucia',
  templateUrl: './lucia.component.html',
  styleUrls: ['./lucia.component.scss']
})
export class LuciaComponent implements OnInit {

  constructor() { }
  

  loadAlexa = 'Ciao, come stai ?'
  message: string = ''
  answering: boolean = false;
  alexa1: string = ''
  alexa2: string = ''
  alexa3: string = ''
  alexa4: string = ''
  alexa5: string = ''
  alexa6: string = ''
  alexa7: string = ''
  answ1: string = ''
  answ2: string = ''
  answ3: string = ''
  answ4: string = ''
  answ5: string = ''


  ngOnInit(): void {
    this.loadCiao()
  }

  loadCiao() {
    this.answering = true
    setTimeout(() => {
      this.answering = false;
      this.alexa1 = this.loadAlexa;
    }, 1000)
  }

  sendMsg() {
    if (this.answ1 === '') {
      this.answ1 = this.message
      this.message = ''
      setTimeout(() => {
        this.answering = true
        setTimeout(() => {
          this.answering = false
          this.alexa2 = 'Hai sentito Marika ? Mi ha detto che non sta tanto bene'
        }, 2000)
      }, 1000)
    }
    if (this.alexa2 !== '' && this.answ2 === '') {
      this.answ2 = this.message
      this.message = ''
      setTimeout(() => {
        this.answering = true
        setTimeout(() => {
          this.answering = false
          this.alexa3 = 'Non mi ha detto cosa ha ma mi sembrava giù.. che ne dici se andiamo a trovarla ?'
        }, 2000)
      }, 1000)
    }
    if (this.alexa3 !== '' && this.answ3 === '') {
      this.answ3 = this.message
      this.message = ''
      setTimeout(() => {
        this.answering = true
        setTimeout(() => {
          this.answering = false
          this.alexa4 = 'Pensi sia una buona idea ?'
          setTimeout(() => {
            this.answering = true
            setTimeout(() => {
              this.alexa5 = 'Non vorrei darle fastidio'
              this.answering = false
            })
          }, 1000)
        }, 2000)
      }, 1000)
    }
    if (this.alexa5 !== '' && this.answ4 === '') {
      this.answ4 = this.message
      this.message = ''
      setTimeout(() => {
        this.answering = true
        setTimeout(() => {
          this.answering = false
          this.alexa6 = 'Provo a chiamarla, vediamo che dice'
          setTimeout(() => {
            this.answering = true
            setTimeout(() => {
              this.alexa7 = 'In caso ti riscrivo e andiamo insieme'
              this.answering = false
            })
          }, 1000)
        }, 2000)
      }, 1000)
    }
    else{
      this.answ5 = this.message
    }
  }
 
}
 
  /* 

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
      this.lucia1 = this.loadLucia;
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
 */