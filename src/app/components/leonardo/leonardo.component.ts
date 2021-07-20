import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leonardo',
  templateUrl: './leonardo.component.html',
  styleUrls: ['./leonardo.component.scss']
})
export class LeonardoComponent implements OnInit {

  loadLeonardo = 'Hey !' 
  message: string = ''
  answering: boolean = false;
  leonardo1: string = ''
  leonardo2: string = ''
  leonardo3: string = ''
  leonardo4: string = ''
  leonardo5: string = ''
  leonardo6: string = ''
  leonardo7: string = ''
  answ1: string = ''
  answ2: string = ''
  answ3: string = ''
  answ4: string = ''
  answ5: string = ''


  constructor() { }

  ngOnInit(): void {
    this.loadCiao()
  }

  loadCiao() {
    this.answering = true
    setTimeout(() => {
      this.answering = false;
      this.leonardo1 = this.loadLeonardo ;
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
          this.leonardo2 = 'Oggi che fai ? Ti va di andare al cinema ?'
        }, 2000)
      }, 1000)
    }
    if (this.leonardo2 !== '' && this.answ2 === '') {
      this.answ2 = this.message
      this.message = ''
      setTimeout(() => {
        this.answering = true
        setTimeout(() => {
          this.answering = false
          this.leonardo3 = 'Pensavo di andare allo spettacolo delle 5, che ne dici ?'
        }, 2000)
      }, 1000)
    }
    if (this.leonardo3 !== '' && this.answ3 === '') {
      this.answ3 = this.message
      this.message = ''
      setTimeout(() => {
        this.answering = true
        setTimeout(() => {
          this.answering = false
          this.leonardo4 = 'Perfetto allora prenoto subito !'
          setTimeout(() => {
            this.answering = true
            setTimeout(() => {
              this.leonardo5 = 'Ti serve un passaggio ?'
              this.answering = false
            })
          }, 1000)
        }, 2000)
      }, 1000)
    }
    if (this.leonardo5 !== '' && this.answ4 === '') {
      this.answ4 = this.message
      this.message = ''
      setTimeout(() => {
        this.answering = true
        setTimeout(() => {
          this.answering = false
          this.leonardo6 = 'Ok allora ci vediamo tra poco! '
          setTimeout(() => {
            this.answering = true
            setTimeout(() => {
              this.leonardo7 = 'Non fare tardi come tuo solito ;)'
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
