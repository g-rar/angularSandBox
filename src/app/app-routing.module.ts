import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExampleComponent } from './example/example.component';
import { ValeriaComponent } from './valeria/valeria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


const routes: Routes = [
  {path: '', component:MainComponent},
  {path: 'example', component:ExampleComponent},
  {path: 'valeria', component:ValeriaComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [BrowserAnimationsModule, NoopAnimationsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
