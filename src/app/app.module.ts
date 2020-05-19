import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleComponent } from './example/example.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GerardoComponent } from './gerardo/gerardo.component';
import { ValeriaComponent } from './valeria/valeria.component';
import { GabycpComponent } from './GabyGV/gabycp/gabycp.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    ExampleComponent,
    GerardoComponent,
    ValeriaComponent,
    GabycpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
