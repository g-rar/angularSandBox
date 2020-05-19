import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExampleComponent } from './example/example.component';
import { GerardoComponent } from './gerardo/gerardo.component';
import { GabycpComponent } from './GabyGV/gabycp/gabycp.component';

import { ValeriaComponent } from './valeria/valeria.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path: 'example', component:ExampleComponent},
  {path: 'gerardo', component:GerardoComponent},
  {path: 'valeria', component:ValeriaComponent},
  {path: 'pato', component:GabycpComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
