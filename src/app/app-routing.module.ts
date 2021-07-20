import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { AlexaComponent } from './components/alexa/alexa.component';
import {HomeComponent} from './components/home/home.component'
import { LeonardoComponent } from './components/leonardo/leonardo.component';
import { LuciaComponent } from './components/lucia/lucia.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chat', component: ChatComponent,
  children: [
    {path: 'alexa', component: AlexaComponent},
    {path: 'leonardo', component: LeonardoComponent},
    {path: 'lucia', component: LuciaComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
