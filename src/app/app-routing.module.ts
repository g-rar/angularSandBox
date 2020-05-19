import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExampleComponent } from './example/example.component';
import { GerardoComponent } from './gerardo/gerardo.component';
import { GabycpComponent } from './GabyGV/gabycp/gabycp.component';

import {CalculadoraComponent} from'./calculadora/calculadora.component'
import { ValeriaComponent } from './valeria/valeria.component';
import { NataliaComponent } from './natalia/natalia.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path: 'example', component:ExampleComponent},

  {path: 'gerardo', component:GerardoComponent},

  {path: 'calculadora', component:CalculadoraComponent},
  {path: 'valeria', component:ValeriaComponent},
  {path: 'pato', component:GabycpComponent},
  {path: 'natalia', component:NataliaComponent},
  {path: '**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
