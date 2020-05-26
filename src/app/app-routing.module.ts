import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExampleComponent } from './example/example.component';
import { ValeriaComponent } from './valeria/valeria.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path: 'example', component:ExampleComponent},
  {path: 'valeria', component:ValeriaComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
