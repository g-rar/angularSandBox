import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExampleComponent } from './example/example.component';
import { GabycpComponent } from './GabyGV/gabycp/gabycp.component';


const routes: Routes = [
  {path: '', component:MainComponent},
  {path: 'example', component:ExampleComponent},
  {path: 'pato', component:GabycpComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
